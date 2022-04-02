import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import './header.css';

class Header extends Component {
    render(){
        return (
          <div className='header-main'>
              <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="login">Venturepact</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="login">Login</Nav.Link>
                  <Nav.Link href="register">Register</Nav.Link>
                </Nav>
                </Container>
               </Navbar>
  <br />
          </div>
        )
    }
}

export default Header