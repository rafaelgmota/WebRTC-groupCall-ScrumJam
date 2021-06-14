import { MdClose } from 'react-icons/md'
import { BackDrop, Container, TitleBar, Content } from './styles'

export default function ModalPreHome({
  isVisible,
  handleClose,
  history,
  children
}) {
  return (
    isVisible && (
      <BackDrop>
        <Container>
          <TitleBar>
            <p>Informações de Acesso</p>
            <MdClose size={25} onClick={handleClose} />
          </TitleBar>
          <Content>{children}</Content>
        </Container>
      </BackDrop>
    )
  )
}
