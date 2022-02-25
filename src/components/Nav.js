import React from 'react'

function Nav({currentPage, handlePageChange}) {
    return (
        <header>
            <div className = 'hero'>
                <h2>
                    <a href='/'>
                        Kimberly
                    </a>
                </h2>
                <nav>
                    <ul>
                        <li className='nav-item'>
                            <a href='#about'
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active bg-white rounded' : 'nav-link'}
                            >
                                About Me
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active bg-white rounded' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active bg-white rounded' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#Resume'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active bg-white rounded' : 'nav-link'}
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