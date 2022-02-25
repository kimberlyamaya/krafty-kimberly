import React from 'react'
import bioImage from '../../assets/about-me/IMG_4474.jpg'
import Foot from './Foot'

function About({currentPage}) {
    return (
        <main>
            <section>
                <div className='container'>
                    {/* <h2 id='about'>About Me</h2> */}
                    <h2>{currentPage}</h2>
                    <div className='container'>
                        <img src={bioImage}className='bio-img' alt='hero' />
                        <p>bio</p>
                    </div>
                </div>
            </section>
         <Foot />
        </main>
    )
}

export default About