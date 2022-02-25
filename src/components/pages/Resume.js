import React from 'react'

function Resume({currentPage}) {
    return (
        <div className='container'>
            <h2>{currentPage}</h2>
            <div className='container'>
                <p>Download my <span><a href='/' alt='resume download'>Resume</a></span></p>
                <h4>Front-end Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Back-end Proficiencies</h4>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume