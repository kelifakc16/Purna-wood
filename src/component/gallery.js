import React from 'react'
import Header from '../component/header';
import Footer from './footer';

import PhotoGallery from './photoGallery';
export default function Gallery() {
    return (
        <>
            <Header />
            <div className='gallery'>
                <h1 className=' text-center gallery-text'>
                    Purna woods' gallery
                </h1>
                <div className='container'>
               <PhotoGallery/>
               </div>
            </div>
            <Footer />
        </>
    )
}
