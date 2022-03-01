import React, {useState} from 'react'

function Portfolio({currentPage}) {
    const [showTextP1, setShowTextP1] = useState(false)
    const [showTextP2, setShowTextP2] = useState(false)
    const [showTextP3, setShowTextP3] = useState(false)
    const [showTextP4, setShowTextP4] = useState(false)
    const [showTextP5, setShowTextP5] = useState(false)
    const [showTextP6, setShowTextP6] = useState(false)

    return (
        <div className='container'>
            <h2>{currentPage}</h2>
            <div>
                <div className='row padding'>

                    {/* project 1 */}
                    <div 
                        onMouseEnter={() => setShowTextP1(true)}
                        onMouseLeave={() => setShowTextP1(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/Stockable.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP1 && (
                        <div>
                        <a href='https://limichael97.github.io/Stockable/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            Stockable
                        </a>
                        <a href='https://github.com/kimberlyamaya/Stockable' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>

                    {/* project 2 */}
                    <div 
                        onMouseEnter={() => setShowTextP2(true)}
                        onMouseLeave={() => setShowTextP2(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/iCocina.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP2 && (
                        <div>
                        <a href='https://icocina.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            iCocina
                        </a>
                        <a href='https://github.com/kimberlyamaya/iCocina' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>

                    {/* project 3 */}
                    <div 
                        onMouseEnter={() => setShowTextP3(true)}
                        onMouseLeave={() => setShowTextP3(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/techBlog.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP3 && (
                        <div>
                        <a href='https://secure-dusk-47715.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            Tech Blog
                        </a>
                        <a href='https://github.com/kimberlyamaya/MVC-challenge' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>

                    {/* project 4 */}
                    <div 
                        onMouseEnter={() => setShowTextP4(true)}
                        onMouseLeave={() => setShowTextP4(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/expressNoteTaker.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP4 && (
                        <div>
                        <a href='https://express-note-taker-99.herokuapp.com/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            Express Note Taker
                        </a>
                        <a href='https://github.com/kimberlyamaya/express-note-taker' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>


                    {/* project 5 */}
                    <div 
                        onMouseEnter={() => setShowTextP5(true)}
                        onMouseLeave={() => setShowTextP5(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/workDayScheduler.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP5 && (
                        <div>
                        <a href='https://kimberlyamaya.github.io/work-day-scheduler/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            Work Day Scheduler
                        </a>
                        <a href='https://github.com/kimberlyamaya/work-day-scheduler' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>

                    {/* project 6 */}
                    <div 
                        onMouseEnter={() => setShowTextP6(true)}
                        onMouseLeave={() => setShowTextP6(false)}
                        className='col-5 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/passwordGenerator.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showTextP6 && (
                        <div>
                        <a href='https://kimberlyamaya.github.io/Password-Generator/' target='_blank' rel='noreferrer noopener' className='project-card-links'>
                            Password Generator
                        </a>
                        <a href='https://github.com/kimberlyamaya/Password-Generator' target='_blank' rel='noreferrer noopener'
                        className='project-card-github'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio