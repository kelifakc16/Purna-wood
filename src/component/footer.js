import React from 'react'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div className='footer '>
                <Container>
                    <Row>
                        <Col xl={2} style={{ fontSize: '25px' }}>Purna Woods</Col>
                        <Col xl={7} className='footer-list'>

                            <Nav className="nav">
                                <Nav.Link className="navlist" href="/">Home</Nav.Link>
                                <Nav.Link className="navlist" href="/aboutus">About us</Nav.Link>
                                <Nav.Link className="navlist" href="/services">Services</Nav.Link>
                                <Nav.Link className="navlist" href="/contactus">Contact us</Nav.Link>
                                <Nav.Link className="navlist" href="/gallery">Gallery</Nav.Link>
                                

                            </Nav>
                        </Col>
                        <Col xl={3}>
                            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Nepal's finest wood carving company with tons of projects already finished</p>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
