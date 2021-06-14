import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaBars, FaUsers, FaShare, FaPowerOff } from 'react-icons/fa'
import Modal from '../Modal'
import { Input } from '../../pages/PreHome/styles'
import { Container, MenuList, MenuItem } from './styles'

export default function SideBar() {
  const [show, setShow] = useState(false)
  const [roomCode, setRoomCode] = useState('')

  const state = useSelector(state => state.call)
  useEffect(() => {
    setRoomCode(state.roomCode)
  }, [])

  const handleShare = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <Container>
        <MenuList>
          <MenuItem>
            <FaBars />
          </MenuItem>
          <NavLink to="/">
            <MenuItem>
              <FaUsers />
            </MenuItem>
          </NavLink>
          <MenuItem>
            <FaShare onClick={handleShare} />
          </MenuItem>
        </MenuList>

        <MenuList>
          <MenuItem className="logout">
            <FaPowerOff />
          </MenuItem>
        </MenuList>
      </Container>
      <Modal isVisible={show} handleClose={() => setShow(!show)}>
        <Input value={roomCode} contentEditable={false} />
      </Modal>
    </React.Fragment>
  )
}
