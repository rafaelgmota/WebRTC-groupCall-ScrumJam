import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  width: calc(100% - 50px);
  position: fixed;
  left: 50px;
  right: 0;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundMedium};
  padding: 0 50px;
  img {
    height: 20px;
    width: auto;
  }
  h3 {
    color: ${({ theme }) => theme.white};
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .timer {
    display: flex;
    svg {
      margin-right: 5px;
    }
    color: ${({ theme }) => theme.backgroundLight};
  }
`
