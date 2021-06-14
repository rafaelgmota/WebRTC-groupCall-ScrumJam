import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import { GlobalStyle, theme } from './styles/global'
import { connectWithWebSocket } from './ws/wssConnection'

function App() {
  useEffect(() => {
    connectWithWebSocket()
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
