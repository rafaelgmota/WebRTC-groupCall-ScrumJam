
export const MediasActionTypes = {
  SHARE_VIDEO: '@medias/SHARE_VIDEO',
  SHARE_AUDIO: '@medias/SHARE_AUDIO',
  SET_VIDEO_STREAM: '@medias/SET_VIDEO_STREAM',
  SET_AUDIO_STREAM: '@medias/SET_AUDIO_STREAM'
}

const INITIAL_STATE = {
  localVideoStream: null,
  videoSender: null,

  localAudioStream: null,
  audioSender: null
}

export class MediasActions {
  static shareVideo() {
    return async (dispatch) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        dispatch({ type: MediasActionTypes.SET_VIDEO_STREAM, payload: stream })
      } catch (err) {
        console.log('error trying to get video')
      }
    }
  };

  static shareAudio() {
    return async (dispatch) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        dispatch({ type: MediasActionTypes.SET_AUDIO_STREAM, payload: stream })
      } catch (err) {
        console.log('error trying to get audio')
      }
    }
  };
}

export class MediasSelectors {
  static localVideoStream({ medias }) {
    return medias?.localVideoStream
  }

  static localAudioStream({ medias }) {
    return medias?.localAudioStream
  }
}

export function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case MediasActionTypes.SET_VIDEO_STREAM:
      return { ...state, localVideoStream: payload }
    case MediasActionTypes.SET_AUDIO_STREAM:
      return { ...state, localAudioStream: payload }
    default:
      return state
  }
}
