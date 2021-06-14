export const CALL_SET_LOCAL_STREAM = 'CALL.SET_LOCAL_STREAM'
export const CALL_SET_REMOTE_STREAM = 'CALL.SET_REMOTE_STREAM'
export const CALL_SET_LOCAL_PEER_CONN_ID = 'CALL.SET_LOCAL_PEER_CONN_ID'
export const CALL_SET_ROOM_CODE = 'CALL.SET_ROOM_CODE'

export const setRoomCodeState = (roomCode) => {
  return {
    type: CALL_SET_ROOM_CODE,
    payload: roomCode
  }
}

export const setLocalPeerConnId = (localPeerConnId) => {
  return {
    type: CALL_SET_LOCAL_PEER_CONN_ID,
    payload: localPeerConnId
  }
}

export const setLocalStream = (localStream) => {
  return {
    type: CALL_SET_LOCAL_STREAM,
    localStream
  }
}

export const setRemoteStream = (peerConn, remoteStream) => {
  return {
    type: CALL_SET_REMOTE_STREAM,
    payload: {
      peerConn,
      remoteStream
    }
  }
}
