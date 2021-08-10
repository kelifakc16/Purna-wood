import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../component/header';
import Footer from './footer';
import Cards from './cards';

export default function Project() {
  return (
    <>
      <Container>
        <Header />
        <div className='projects text-center'>
          <h1>PROJECTS WE'VE DONE SO FAR</h1>
        </div>
        <div className='card-detail'>
          <Cards date='2020-11-12'
            heading='Kathmandu Airport Project'
            para='Done some work here and there'
          />
          <Cards date='2020-11-18'
            heading='Spanish Project'
            para='This project was done in spain,madrid'
          />
        </div>
      </Container>
      <Footer />
    </>
  )
}
