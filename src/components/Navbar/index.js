import "./index.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
function NavbarBoot() {
    return (
      <Navbar expand="lg" className=" navbar" >
        <Container>
          <Navbar.Brand href="#about"><img src="https://res.cloudinary.com/dqe4ld4cx/image/upload/v1705764232/U_xvxxqx.png" className='header-image-logo' alt="header-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-grey bg-transparent"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto text-center justify-content-center">
              <Nav.Link href="#about" className="text-white text-center "><p className="hover-underline-animation">About</p></Nav.Link>
              <Nav.Link href="#projects" className="text-white "><p className="hover-underline-animation">Projects</p></Nav.Link>
              <Nav.Link href="#skills" className="text-white "><p className="hover-underline-animation">Skills</p></Nav.Link>
              <Nav.Link href="#experiences" className="text-white "><p className="hover-underline-animation">Experiences</p></Nav.Link>
              <Nav.Link href="#footer" className="text-white"><p className="hover-underline-animation">Contact</p></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarBoot;