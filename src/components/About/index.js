import React from 'react'
// move image to nav section
import heroImage from '../../assets/header/portfolio-background-1.jpg'
import bioImage from '../../assets/about-me/IMG_4474.jpg'

function About() {
    return (
        <section className='my-5'>
            <h1 id='about'>About Me</h1>
            {/* turn image into circle */}
            <img src={bioImage}className='my-2' style={{ width: '20%' }} alt='hero' />
            <p>bio</p>
            {/* move image to nav section */}
            <img src={heroImage} className='my-2' style={{ width: '100%' }} alt='hero' />
        </section>
    )
}

export default About