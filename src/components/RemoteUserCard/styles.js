import styled from 'styled-components'

export const Container = styled.div`
  height: 150px;
  width: 250px;
  background-color: ${({ theme }) => theme.backgroundDark};
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.62);

  video {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundDark};
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.62);
  }
`
export const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.getRandomColor()};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 40px;
`
