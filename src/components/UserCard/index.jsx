import { useEffect, useRef } from 'react'
import { Container, Circle, Text } from './styles'

import styles from './user-card.module.css'

export default function UserCard(props) {
  const { localStream } = props
  const localVideoRef = useRef()

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current
      localVideo.srcObject = localStream

      localVideo.onloadedmetadata = () => {
        localVideo.play()
      }
    }
  }, [localStream])

  // const setVideo = (video) => {
  //   if (video) {
  //     video.srcObject = srcObject
  //   }
  // }
  return (
    <Container>
      {!localStream && (
        <Circle>
          <Text>GC</Text>
        </Circle>
      )}
      {localStream && (
        <video
          className={styles.video}
          autoPlay
          muted
          playsInline
          ref={localVideoRef}
        ></video>
      )}
    </Container>
  )
}
