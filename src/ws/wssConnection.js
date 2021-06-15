import socketClient from 'socket.io-client'
import store from '../redux/store/store'
import { setLocalPeerConnId } from '../redux/actions/callActions'
import * as webRTCHandler from '../webRTC/webRTCHandler'

const SERVER = 'https://webrtcdaviteste.herokuapp.com/'

let socket
let caller
let callee

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER)

  socket.on('connection', () => {
    console.log('succesfully connected with wss server')
    console.log(socket.id)
  })

  socket.on('new-user-joined', (data) => {
    callee = data.socketId
    socket.emit('new-user-start', { to: data.socketId, sender: socket.id })
    webRTCHandler.getLocalStream(callee, false)
  })

  socket.on('new-user-start', (data) => {
    caller = data.sender
    webRTCHandler.getLocalStream(caller, true)
  })

  socket.on('webRTC-offer', (data) => {
    webRTCHandler.handleOffer(data)
  })

  socket.on('webRTC-answer', (data) => {
    webRTCHandler.handleAnswer(data)
  })

  socket.on('webRTC-candidate', (data) => {
    webRTCHandler.handleCandidate(data)
  })
}

export const registerNewUser = (room) => {
  store.dispatch(setLocalPeerConnId(socket.id))
  socket.emit('join-room', {
    // username: username,
    roomID: room,
    socketId: socket.id
  })

  // webRTCHandler.getLocalStream(socket.id)
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
