import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 50px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundDark};
`
export const MenuList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;

  a.active {
    li {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: ${({ theme }) => theme.primary};
      }
      svg {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`
export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  height: 50px;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }

  &:not(.logout):hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: ${({ theme }) => theme.primary};
    }
    svg {
      color: ${({ theme }) => theme.primary};
    }
  }

  &.logout {
    background-color: #c0392b;
  }
`
