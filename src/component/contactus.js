import React from 'react'
import Header from '../component/header';
import Footer from './footer';
import Form from 'react-bootstrap/Form'
import { Container,Button } from 'react-bootstrap'
export default function Contactus() {
    return (
        <div>
            <Header />
            <div className='content '>
                <div className='mb-5 contact text-center'>
                    <h1><strong>Email:</strong>purnawoods@gmail.com</h1>
                    <h1><strong>Phone Number:</strong>+977-01-4234433</h1>
                    <h1><strong>Location:</strong>Lalitpur, Nepal</h1>
                </div>

                <Container>
                    <Form className='form'>
                        <p className='my-5'>If you have any message for us, please fill up the form and send to us.</p>
                        <Form.Group className="forms" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="fname" placeholder="Bill" className="mb-4 control"/>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="pnumber" placeholder="977000000" className="mb-4 control"/>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="bill@gmail.com" className="mb-4 control"/>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="email" placeholder="Address" className="mb-4 control" />
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Say something"
                                style={{ height: '150px' }}
                                className="mb-4 control" 
                            />
                            <Button type="submit"  className="my-3 submit">
                                Submit
                            </Button>
                        </Form.Group>


                    </Form>
                </Container>
            </div>

            <Footer />
        </div>
    )
}
