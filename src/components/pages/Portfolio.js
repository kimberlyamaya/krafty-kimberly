import React from 'react'
import Foot from './Foot'

function Portfolio({currentPage}) {
console.log(currentPage)
    return (
        <main>
            <section>
                <h2>{currentPage}</h2>
                <div className='container d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-5 border rounded m-2'>
                            <a href='/' target='_blank' rel='noreferrer noopener'>
                                {/* having trouble here */}
                                <img src='../assets/header/portfolio-background.jpg' alt='project 1'></img>
                            </a>
                        </div>
                        <div className='col-5 border rounded m-2'>
                            <img src='...' alt='project 2'></img>
                        </div>
                        <div className='col-5 border rounded m-2'>
                            <img src='...' alt='project 3'></img>
                        </div>
                        <div className='col-5 border rounded m-2'>
                            <img src='...' alt='project 4'></img>
                        </div>
                        <div className='col-5 border rounded m-2'>
                            <img src='...' alt='project 5'></img>
                        </div>
                        <div className='col-5 border rounded m-2'>
                            <img src='...' alt='project 6'></img>
                        </div>
                    </div>
                </div>
            </section>
            <Foot/>
        </main>
    )
}

export default Portfolio