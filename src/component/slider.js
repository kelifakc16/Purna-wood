import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <>
            <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true}>
                <div className='slide'>
                    <div className="carousel-caption text-center">
                        <h1 style={{ font: '64px Staatliches , sansSerif' }}>PURNA WOODS</h1>
                        <p style={{ font: '16px' }}>Nepal's finest wood carving company with tons of projects already finished</p>
                    <div className='mouse'></div>
                    <div class="caption">Scroll to View</div>
                    </div>
                </div>
                <div className='imgs'>
                    <div className="carousel-caption">
                        <h1 style={{ font: '64px Staatliches , sansSerif' }}>PURNA WOODS</h1>
                        <p style={{ font: '16px' }}>Nepal's finest wood carving company with tons of projects already finished</p>
                        <div className='mouse'></div>
                        <div class="caption">Scroll to View</div>
                        </div>
                </div>
            </Carousel>

        </>
    )
}
