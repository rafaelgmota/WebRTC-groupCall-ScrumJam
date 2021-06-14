import styled from 'styled-components'

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Id',
  placeholderTextColor: '#fff'
}))`
  width: 18rem;
  height: 2.4rem;
  border-radius: 4px;
  border: 0;
  background-color: #606074;
  color: #fff;
  font-size: 1.2rem;
  padding: 0 1rem;

  &:focus {
    text-decoration: none;
    border: 0;
    outline: none;
  }
`

export const RoomInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem 0;
    color: #fff;
  }
  Button {
    width: 18rem;
  }
`

export const EnterRoomBtnArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  Button {
    width: 18rem;
  }
`
