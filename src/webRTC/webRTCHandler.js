import store from '../redux/store/store'
import { setLocalStream, setRemoteStream } from '../redux/actions/callActions'
import * as wss from '../ws/wssConnection'

const defaultConstrains = {
  video: {
    width: 380,
    height: 260
  },
  audio: true
}

const configuration = {
  iceServers: [
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    // { urls: 'stun:stun.l.google.com:13902' },
    // { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' }
  ]
}

const peerConnection = []

export const getLocalStream = (peerConn, sendOffer) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia
  navigator.mediaDevices
    .getUserMedia(defaultConstrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream))
      createPeerConnection(peerConn, sendOffer)
    })
    .catch((err) => {
      console.log(err)
    })
}

const createPeerConnection = (peerConn, sendOffer) => {
  console.log('Start creating peer')
  // peerConnection.push(peerConn)
  peerConnection[peerConn] = new RTCPeerConnection(configuration)

  const localStream = store.getState().call.localStream

  for (const track of localStream.getTracks()) {
    peerConnection[peerConn].addTrack(track, localStream)
  }

  peerConnection[peerConn].ontrack = ({ streams: [stream] }) => {
    store.dispatch(setRemoteStream(peerConn, stream))
  }

  peerConnection[peerConn].onicecandidate = (event) => {
    console.log('geeting candidates from stun server')
    if (event.candidate) {
      wss.sendWebRTCCandidate({
        candidate: event.candidate,
        connectedUserSocketId: peerConn
      })
    }
  }

  peerConnection[peerConn].onconnectionstatechange = (event) => {
    if (peerConnection[peerConn].connectionState === 'connected') {
      console.log('succesfully connected with other peer')
    }
  }

  const sendWebRTCOffer = async (peerConn) => {
    console.log('SEND OFFER ===>', peerConnection[peerConn])
    peerConnection[peerConn].onnegotiationneeded = async () => {
      const offer = await peerConnection[peerConn].createOffer()
      console.log('OFFER', offer)
      await peerConnection[peerConn].setLocalDescription(offer)

      wss.sendWebRTCOffer({
        calleeSocketId: peerConn,
        offer: offer
      })
    }
  }

  console.log('PEER CONN ARR', peerConnection)

  if (sendOffer) {
    sendWebRTCOffer(peerConn)
  }
}

export const handleOffer = async (data) => {
  await peerConnection[data.sender].setRemoteDescription(
    new RTCSessionDescription(data.offer)
  )
  const answer = await peerConnection[data.sender].createAnswer()
  await peerConnection[data.sender].setLocalDescription(answer)
  wss.sendWebRTCAnswer({
    callerSocketId: data.sender,
    answer: answer
  })
}

export const handleAnswer = async (data) => {
  await peerConnection[data.sender].setRemoteDescription(
    new RTCSessionDescription(data.answer)
  )
}

export const handleCandidate = async (data) => {
  try {
    console.log('adding ice candidates')
    await peerConnection[data.sender].addIceCandidate(
      new RTCIceCandidate(data.candidate)
    )
  } catch (err) {
    console.error(
      'error occured when trying to add received ice candidate',
      err
    )
  }
}
