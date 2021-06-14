import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import { registerNewUser } from '../../ws/wssConnection'

import Layout from '../_layout'
import Modal from '../../components/Modal'
import UserCard from '../../components/UserCard'
// import { MediasActions, MediasSelectors } from '../../modules/medias/reducer'
import MediaControls from '../../components/MediaControls'
import { Container, Button, LocalVideo } from './styles'
import RemoteUserCard from '../../components/RemoteUserCard'

export default function Home() {
  const [show, setShow] = useState(false)

  const history = useHistory()
  const { location } = history
  const state = useSelector((state) => state.call)

  useEffect(() => {
    console.log(history)
    const room = location.state
    if (!room) {
      history.push('/')
      return
    }
    registerNewUser(room)
  }, [])

  async function handleInit() {
    setShow(false)
  }

  // remove duplicates
  const uniqueRemote = _.uniqWith(state.remoteStream, _.isEqual)

  const remoteStreamFiltered = uniqueRemote.filter(
    (remoteStream) => remoteStream.peerConn !== state.localPeerConnId
  )

  return (
    <Layout>
      <Modal isVisible={show} handleClose={() => setShow(!show)}>
        <div
          style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}
        >
          Conteudo
        </div>
        <Button onClick={handleInit}>Confirmar</Button>
      </Modal>
      <Container>
        {remoteStreamFiltered.map((remoteStream, idx) => {
          return (
            <RemoteUserCard
              key={idx}
              remoteStream={remoteStream.remoteStream}
            />
          )
        })}
        <MediaControls />
        <LocalVideo>
          <UserCard localStream={state.localStream} />
        </LocalVideo>
      </Container>
    </Layout>
  )
}
