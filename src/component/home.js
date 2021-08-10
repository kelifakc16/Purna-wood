import React from 'react'
import Slider from './slider'
import Header from '../component/header';
import {Row,Col,Container,Button} from 'react-bootstrap'
import pic from '../images/picture 3.jpeg'
import pic5 from '../images/picture 5.jpeg'
import pic6 from '../images/picture 6.jpeg'
import pic7 from '../images/picture 7.jpeg'
import SpecialButton from './specialButton';
import Footer from './footer';
import Form from 'react-bootstrap/Form'


export default function Home() {
    return (
        <>
            <Slider />
            <Header />
            <div className='content'>
                <Container>
                    <Row>
                        <Col xl={6}>
                            <h1 className='box'>
                                <img src={pic} alt='pic3' height='300px' />
                            </h1>
                        </Col>
                        <Col className='my-4' xl={6}>
                            <h1 style={{ fontSize: '48px', fontWeight: '500' }}>Number One On Business</h1>
                            <p className='my-3'>We're known as the best in the business by many of our clients.</p>
                            <div className='boxs'>
                                <button className='btn-special'>See the Proof</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row>
                        <Col xl={3}>
                            <h1 style={{ fontSize: '18px' }}>about</h1>
                        </Col>
                        <Col xl={9}>
                            <p style={{ fontSize: '32px', fontWeight: 'bold' }}> Purna Woods is a Nepalese family business with a long time experience and passion for building woods arts and crafts.</p>
                            <div className='boxs'>
                                <button className='btn-special'>Learn more about us</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row>
                        <Col xl={4}>
                            <h1 className='font-serif'>See<br /> Our<br /> Works</h1>
                            <p className='mt-3' style={{ fontSize: '18px', textAlign: 'justify' }}>Here are our some of the works that we like to show off. Here are our some of the works that we like to show off. Here are our some of the works that we like to show off. Here are our some of the works that we like to show off.</p>
                            <SpecialButton />
                        </Col>
                        <Col xl={4}>
                            <img src={pic5} style={{ height: '100%', width: '100%' }} alt='pic' />
                        </Col>
                        <Col xl={4}>
                            <img src={pic6} style={{ width: '100%', height: 'auto' }} alt='pic' />
                            <img src={pic7} style={{ width: '100%', height: 'auto' }} className='my-5' alt='pic' />
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="googleMap">
                <Container className='d-flex'>
                    <div className='map'>
                        <iframe className='mb-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56548.76233446211!2d85.36017876828265!3d27.646261401072966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1064a3e5d0e5%3A0xc118922cd7da2d45!2sAnantalingeshwar!5e0!3m2!1sen!2snp!4v1628085549169!5m2!1sen!2snp" style={{ width: "100%", height: "650px", style: "border:0" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className='mb-4 map-text text-white p-3'>
                        <h1 className='mt-4'>Contact Us</h1>
                        <h5 className='mt-4'>Lalitpur, Nepal</h5>
                        <h5>+977-01-4234433</h5>
                        <h5>purnawoods@gmail.com</h5>
                        <h5 className='mt-4'>Leave a Message</h5>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Full Name" className='p-3 border'/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="password" placeholder="Address" className='p-3' />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control placeholder="Email Address" className='p-3' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Control placeholder="Phone Number" className='p-3'/>
                            </Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                style={{ height: '150px' }}
                                className="mb-4 control p-3"
                            />
                           <Button  variant="danger">Submit</Button>
                        </Form>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
