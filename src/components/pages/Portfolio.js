import React, {useState} from 'react'

function Portfolio({currentPage}) {
    const [showText, setShowText] = useState(false)

    return (
        <div className='container'>
            <h2>{currentPage}</h2>
            <div className='d-flex justify-content-center'>
                <div className='row'>

                    {/* project 1 */}
                    <div 
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                        className='col-5 m-2 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/Stockable.jpg',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}
                    >
                            
                        {showText && (
                        <div>
                        <a href='https://limichael97.github.io/Stockable/' target='_blank' rel='noreferrer noopener'>
                            Stockable
                        </a>
                        <a href='https://github.com/kimberlyamaya/Stockable' target='_blank' rel='noreferrer noopener'>
                            <i className="bi bi-github"></i>
                        </a>
                        </div>
                        )}

                    </div>

                    {/* project 2 */}
                    <div className='col-5 m-2 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/iCocina.jpg',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}>
                        <a href='https://icocina.herokuapp.com/' target='_blank' rel='noreferrer noopener'>
                            iCocina
                        </a>
                        <a href='https://github.com/kimberlyamaya/iCocina' target='_blank' rel='noreferrer noopener'>
                            <i className="bi bi-github"></i>
                        </a>
                    </div>

                    {/* project 3 */}
                    <div className='col-5 m-2 rounded project-cards' style={{backgroundImage: 'url(./assets/portfolio/techBlog.jpg',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '200px'}}>
                        <a href='https://secure-dusk-47715.herokuapp.com/' target='_blank' rel='noreferrer noopener'>
                            techBlog
                        </a>
                        <a href='https://github.com/kimberlyamaya/MVC-challenge' target='_blank' rel='noreferrer noopener'>
                            <i className="bi bi-github"></i>
                        </a>
                    </div>

                    {/* project 4 */}
                    <div className='col-5 m-2 project-cards'>
                        <a href='/' target='_blank' rel='noreferrer noopener'>
                            <img src='./assets/header/portfolio-background-2.jpg' alt='project 4' className='rounded'></img>
                        </a>
                    </div>

                    {/* project 5 */}
                    <div className='col-5 m-2 project-cards'>
                        <a href='/' target='_blank' rel='noreferrer noopener'>
                            <img src='./assets/header/portfolio-background-2.jpg' alt='project 5' className='rounded'></img>
                        </a>
                    </div>

                    {/* project 6 */}
                    <div className='col-5 m-2 project-cards'>
                        <a href='/' target='_blank' rel='noreferrer noopener'>
                            <img src='./assets/header/portfolio-background-2.jpg' alt='project 6' className='rounded'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio