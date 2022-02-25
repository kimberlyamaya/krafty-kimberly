import React from 'react'
import Foot from './Foot'

function Portfolio({currentPage}) {
console.log(currentPage)
    return (
        <main>
            <section>
                <h2>{currentPage}</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src='...' alt='project 1'></img>
                        </div>
                        <div className='col'>
                            <img src='...' alt='project 2'></img>
                        </div>
                    </div>
                </div>
            </section>
            <Foot/>
        </main>
    )
}

export default Portfolio