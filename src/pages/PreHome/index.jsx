import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setRoomCodeState } from '../../redux/actions/callActions'
import ModalPreHome from '../../components/ModalPreHome'
import { generateRandomString } from '../../helpers/helpers'
import Layout from '../_layout'
import { Button } from '../Home/styles'
import { EnterRoomBtnArea, Input, RoomInfo } from './styles'

const PreHome = ({ route }) => {
  const [show, setShow] = useState(true)
  const [roomCode, setRoomCode] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const enterRoom = () => {
    if (roomCode === '') {
      alert('Inserir ID da Sala')
      return
    }

    dispatch(setRoomCodeState(roomCode))

    history.push({
      pathname: '/home',
      state: roomCode
    })
  }

  const createRoom = () => {
    const id = generateRandomString()[0].toString()
    dispatch(setRoomCodeState(id))
    history.push({
      pathname: '/home',
      state: id
    })
  }

  return (
    <Layout>
      <ModalPreHome
        history={history}
        isVisible={show}
        handleClose={() => setShow(!show)}
      >
        <RoomInfo>
          <h2>INFORME O ID DA SALA</h2>
          <Input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <Button onClick={enterRoom}>ENTRAR</Button>
        </RoomInfo>
        <EnterRoomBtnArea>
          <Button onClick={createRoom}>CRIAR SALA</Button>
        </EnterRoomBtnArea>
      </ModalPreHome>
    </Layout>
  )
}

export default PreHome
