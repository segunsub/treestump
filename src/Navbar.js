import {Navbar,Container,Nav,Image} from 'react-bootstrap'
import logo from './treeStump.jpeg';
function NavbarTop() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
        <Image
          alt="logo image"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          rounded
        /> Treestump</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link href="cleaning">Cleaning Service</Nav.Link>
            <Nav.Link eventKey={2} href="barber">
               Barber Service
            </Nav.Link>
            <Nav.Link href="tel:(929)-152-8943"> 929-152-8943</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavbarTop
