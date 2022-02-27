import React from 'react'

function About({currentPage}) {
    return (
        <div className='container'>
            <h2>{currentPage}</h2>
            <div>
                <img src='./assets/about-me/IMG_4474.jpg' className='bio-img' alt='hero' />
                <p>bio</p>
            </div>
        </div>
    )
}

export default About