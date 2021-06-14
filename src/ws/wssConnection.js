import socketClient from 'socket.io-client'
import store from '../redux/store/store'
import { setLocalPeerConnId } from '../redux/actions/callActions'
import * as webRTCHandler from '../webRTC/webRTCHandler'

const SERVER = 'https://webrtcdaviteste.herokuapp.com/'
// const SERVER = 'http://localhost:com/'

let socket
let caller
let callee

export const connectWithWebSocket = async () => {
  socket = socketClient(SERVER)
  console.log(socket)

  socket.on('connection', () => {
    console.log('succesfully connected with wss server')
    console.log(socket.id)
  })

  socket.on('new-user-joined', (data) => {
    console.log('new user joined')
    console.log(data)
    callee = data.socketId
    socket.emit('new-user-start', { to: data.socketId, sender: socket.id })
    webRTCHandler.getLocalStream(callee, false)
  })

  socket.on('new-user-start', async (data) => {
    console.log('new user start')
    caller = data.sender
    await webRTCHandler.getLocalStream(caller, true)
  })

  socket.on('webRTC-offer', async (data) => {
    await webRTCHandler.handleOffer(data)
  })

  socket.on('webRTC-answer', async (data) => {
    await webRTCHandler.handleAnswer(data)
  })

  socket.on('webRTC-candidate', async (data) => {
    await webRTCHandler.handleCandidate(data)
  })
}

export const registerNewUser = async (room) => {
  store.dispatch(setLocalPeerConnId(socket.id))
  socket.emit('join-room', {
    roomID: room,
    socketId: socket.id
  })

  await webRTCHandler.getLocalStream(socket.id)
}

export const sendWebRTCOffer = (data) => {
  socket.emit('webRTC-offer', data)
}

export const sendWebRTCAnswer = (data) => {
  socket.emit('webRTC-answer', data)
}

export const sendWebRTCCandidate = (data) => {
  socket.emit('webRTC-candidate', data)
}
