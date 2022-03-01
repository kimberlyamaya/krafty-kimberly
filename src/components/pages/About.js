import React from 'react'

function About({currentPage}) {
    return (
        <div className='container'>
            <h2>{currentPage} Me</h2>
            <div className='d-flex bio'>
                <img src='./assets/about-me/IMG_4474.jpg' className='bio-img' alt='hero' />
                <p>I have a background in warehousing, IT systems support for a third party distribution center, including writing intricate SQLs for an oracle database, training users on new systems and procedures, and implementing new systems and procedures. I am self-motivatd, detailed orientated, and work great on my own and in a group setting. I am a fast learner and am fascinated with coding and web development. I am working towards receiving a certificate to become a full stack web developer. Check out my portfolio of deployed applications!</p>
            </div>
        </div>
    )
}

export default About