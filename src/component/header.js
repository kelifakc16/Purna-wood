import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
export default function Header() {
  return (
    <>
     <Navbar expand="lg" className='my-2'>
        <Container>
          <Navbar.Brand href="/" className='brand'>PURNA WOODS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex">
              <Nav.Link className="list" href="/">Home</Nav.Link>
              <Nav.Link className="list" href="/aboutus">About us</Nav.Link>
              <Nav.Link className="list" href="/project">Projects</Nav.Link>
              <Nav.Link className="list" href="/contactus">Contact us</Nav.Link>
              <Nav.Link className="list" href="/gallery">Gallery</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
