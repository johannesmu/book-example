import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export function Header(props) {
  const Navigation = () => {
    if (props.nav) {
      const Items = props.nav.map((item, id) => {
        return (
          <LinkContainer to={item.link}>
            <Nav.Link>
              {item.name}
            </Nav.Link>
          </LinkContainer>
        )
      })
      return (
        <Nav activeKey="/">
          {Items}
        </Nav>
      )
    }
    else {
      return null
    }
  }

  return (
    <header className="main-header">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              Hello Books
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header