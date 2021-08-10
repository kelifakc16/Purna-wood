import React from 'react'
import pic1 from '../images/picture 2.jpeg'
import pic8 from '../images/picture 8.jpeg'
import pic3 from '../images/picture 3.jpeg'
import pic4 from '../images/picture 4.jpeg'
import pic5 from '../images/picture 5.jpeg'
import pic6 from '../images/picture 6.jpeg'
import pic7 from '../images/picture 7.jpeg'


export default function PhotoGallery() {
    let data = [
        {
            id: 1,
            imgSrc: pic3,
        },
        {
            id: 1,
            imgSrc: pic8,
        },
        {
            id: 1,
            imgSrc: pic8,
        },
       
    ]
    return (
        <>
            <div className="photoGallery">
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%', height: '100%' ,margin:'10px'}} />

                        </div>
                    )

                })}
            </div>
         
           
        </>






    )
}
