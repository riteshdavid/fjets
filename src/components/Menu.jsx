import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import demoUrl from "./constants";
import logo1 from "../pics/logo1.webp";
import {Link} from "react-router-dom";




function Menu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <Link to='/' style={{textDecoration:"none",display:"flex",listStyle:"none",color:"#fff"}}>
      <img
          src={logo1}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
      />{' '}
        <strong>F-JETS</strong></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/about">About Us(*)</Nav.Link>
          <Nav.Link><Link to={demoUrl} style={{color:"inherit",textDecoration:"none"}}>Demo Menu(-)</Link></Nav.Link>
          <NavDropdown title="Dropdown(-)" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets(-)</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Jokes(-)
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    </>
  );
}

export default Menu;