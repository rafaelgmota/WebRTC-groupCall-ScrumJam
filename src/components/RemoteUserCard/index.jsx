import { useEffect, useRef } from 'react'
import { Container, Circle, Text } from './styles'

import styles from './user-card.module.css'

export default function RemoteUserCard(props) {
  const { remoteStream } = props
  const remoteVideoRef = useRef()

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current
      remoteVideo.srcObject = remoteStream

      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play()
      }
    }
  }, [remoteStream])

  return (
    <Container>
      {!remoteStream && (
        <Circle>
          <Text>GC</Text>
        </Circle>
      )}
      {remoteStream && (
        <video
          className={styles.video}
          autoPlay
          playsInline
          ref={remoteVideoRef}
        ></video>
      )}
    </Container>
  )
}
