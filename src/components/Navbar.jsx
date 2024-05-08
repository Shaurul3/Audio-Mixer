import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Audio Mixer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/localAudio">Local Audio</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/oscilator">Oscillator</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/about">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}