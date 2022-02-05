import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

function Navigation()
{
  return(
   
  <Navbar  bg="dark" variant="dark"  >
    <Container fluid>
      <Navbar.Brand className="text-md-left" style={{fontSize:"14px"}}>
        Sapien Systems
      </Navbar.Brand>
      <Navbar.Brand className="m-auto" style={{fontSize:"17px"}}>
         #BeAChangemaker
      </Navbar.Brand>
      <Nav className="text-right"  fluid >
      <Nav.Link><i className="fa fa-bell"></i>
      </Nav.Link>
      <Nav.Link><i className="fa fa-list"></i>
      </Nav.Link>
      <Nav.Link><i className="fa fa-user"></i>
      </Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  )
}
export default Navigation;