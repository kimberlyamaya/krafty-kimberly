import React from 'react'

function Nav({currentPage, handlePageChange}) {
    return (
        <header>
            <div className = 'd-flex hero' style={{backgroundImage: 'url(./assets/header/portfolio-background-1.jpg)', 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px'}}>
                <h2>
                    <a href='/' className='header-link'>
                        Kimberly
                    </a>
                </h2>
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href='#about'
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link-active active rounded' : 'nav-link-na'}
                            >
                                About Me
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link-active active rounded' : 'nav-link-na'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link-active active rounded' : 'nav-link-na'}
                            >
                                Contact
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#Resume'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link-active active rounded' : 'nav-link-na'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav