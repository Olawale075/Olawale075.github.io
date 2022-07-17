import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar bg="dark " variant="dark">
    <Container>
      <Navbar.Brand href="home">Olawale.com</Navbar.Brand>
      <Nav className=" ml-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="about">about</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default HeaderComponent