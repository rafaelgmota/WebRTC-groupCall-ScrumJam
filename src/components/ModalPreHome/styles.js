import styled from 'styled-components'

export const BackDrop = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 1;
`

export const Container = styled.div`
  width: 30rem;
  height: 28rem;
  background-color: ${({ theme }) => theme.backgroundMedium};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.62);
`

export const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: bold;
  svg {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 7px;
    color: ${({ theme }) => theme.white};
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  justify-content: space-between;
`
