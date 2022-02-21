import React from 'react'
import bioImage from '../../assets/about-me/IMG_4474.jpg'

function About() {
    return (
        <section className='my-5'>
            <h2 id='about'>About Me</h2>
            {/* turn image into circle */}
            <img src={bioImage}className='bio-img' alt='hero' />
            <p>bio</p>
        </section>
    )
}

export default About