import * as callActions from '../actions/callActions'

const initState = {
  roomCode: '',
  localPeerConnId: '',
  localStream: null,
  remoteStream: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case callActions.CALL_SET_ROOM_CODE:
      return {
        ...state,
        roomCode: action.payload
      }
    case callActions.CALL_SET_LOCAL_PEER_CONN_ID:
      return {
        ...state,
        localPeerConnId: action.payload
      }
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream
      }
    case callActions.CALL_SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: [...state.remoteStream, action.payload]
      }

    default:
      return state
  }
}
export default reducer
