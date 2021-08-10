import React from 'react'

export default function Cards(props) {
    return (
        <>
            <div className='card'>
                <div className='cardfirst'>
                </div>
                <div className='card-body'>
                    <p  className='date'>{props.date}</p>
                    <h2 style={{ fontSize: '16px' }}>{props.heading}</h2>
                    <p className='body-content'>{props.para}</p>
                    <h5 className='project'>View Project</h5>
                </div>
            </div>
        </>
    )
}
