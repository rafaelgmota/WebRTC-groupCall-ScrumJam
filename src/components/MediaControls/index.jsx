import { useState } from 'react'
import { FiCamera, FiCameraOff, FiMic, FiMicOff } from 'react-icons/fi'
import { Container, Circle } from './styles'

export default function MediaControls() {
  const [micActive, setMicActive] = useState(true)
  const [camActive, setCamActive] = useState(false)

  return (
    <Container>
      <Circle color='#ddd' active={micActive} onClick={() => setMicActive(!micActive)} >
        {micActive ? <FiMic /> : <FiMicOff />}
      </Circle>
      <Circle active={camActive} onClick={() => setCamActive(!camActive)} >
        {camActive ? <FiCamera /> : <FiCameraOff />}
      </Circle>
    </Container>
  )
}
