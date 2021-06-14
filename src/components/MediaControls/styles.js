import styled from 'styled-components'

export const Container = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  position: fixed;
  width: calc(100% - 50px);
  bottom: 20px;
  left: 50px;
  right: 0;
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, active }) => active ? theme.secondary : theme.danger};
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 4px 5px 15px -4px rgba(0,0,0,0.62);
  svg {
    color: ${({ theme }) => theme.backgroundMedium};    
    height: 25px;
    width: 25px;    
  }
`
