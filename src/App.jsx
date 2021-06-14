import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import { GlobalStyle, theme } from './styles/global'

function App() {
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
