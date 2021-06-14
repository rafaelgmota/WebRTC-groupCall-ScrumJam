import { FaClock } from 'react-icons/fa'
import { Container } from './styles'
import logo from '../../assets/logo.png'

export default function TopBar() {
  return (
    <Container>
      <img src={logo} alt='scrum jam' />

      <h3>Daily Meeting</h3>

      <div className='timer' >
        <FaClock />
        01:15:25
      </div>
    </Container>
  )
}
