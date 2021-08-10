import React from 'react'
import Header from '../component/header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import pic8 from '../images/picture 8.jpeg'
import Footer from './footer';
export default function Aboutus() {
    return (
        <>
            <Container>
                <Header />
                <div className='about'>
                    <div className='mx-auto'>
                        <Row style={{ margin: '60px 0px 0px' }}>
                            <Col className='content' xl={6}>
                                <h1 className='font'>About<span style={{ color: '#B7791F' }}> Us</span></h1>
                                <p style={{ textAlign: 'justify', fontSize: '14px', lineHeight: '2' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    s survived not only five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.</p>
                            </Col>
                            <Col className='content' xl={6}>
                                <img src={pic8} alt='pic' height='350px' width='550px' />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <h1 className='content-title'>Why should you choose <span style={{ color: '#B7791F' }}> Us ?</span></h1>
                             
                                <h2 className='headline'>Number One</h2>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</p>
                              </Col>
                        </Row>
                    </div>
                    <div className='mx-auto content'>
                        <Row>
                            <Col xl={6} className="textCenter" style={{ padding: '32px', backgroundColor: '#A0AEC0', color: 'white', textAlign: 'center' }}>
                                <h1 >Our Projects</h1>
                                <p>See our projects where we've done <br />diffrent creative works</p>
                                <h4 style={{ textTransform: 'uppercase', fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>View projects</h4>
                                <h5 className='m-auto'></h5>
                            </Col>
                            <Col xl={6} style={{ padding: '32px', backgroundColor: '#C53030', color: 'white', textAlign: 'center' }}>
                                <h1 >Get In Touch</h1>
                                <p >Stay in reach. In this long journey of <br /> life, we may need each other</p>
                                <h4 style={{ textTransform: 'uppercase', fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }} >Contact us</h4>
                                <h5 className='m-auto'></h5>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>


            <Footer />


        </>
    )
}

