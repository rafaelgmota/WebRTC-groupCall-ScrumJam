import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import { Container, Content } from './styles'

export default function Layout({ children }) {
  return (
    <Container>
      <SideBar />
      <TopBar />
      <Content>
        {children}
      </Content>
    </Container>
  )
}
