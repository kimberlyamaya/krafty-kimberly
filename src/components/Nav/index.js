import React from 'react'
// move image to nav section
// import heroImage from '../../assets/header/portfolio-background-2.jpg'

function Nav() {
    const navItems = [
        {
            name: 'Portfolio',
        },
        {
            name: 'Contact',
        },
        {
            name: 'Resume',
        },
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return(
        <header>
            <div className='hero'>
            {/* move image to nav section */}
            {/* <img src={heroImage} className ='hero-img' style={{ width: '100%' }} alt='hero' /> */}
            
              <h2>
                  <a href='/'>
                      Kimberly
                  </a>
              </h2>
              <nav>
                  <ul>
                      <li className='mx-2'>
                          <a href='#about'>
                              About Me
                          </a>
                      </li>
                      {navItems.map((navItem) => (
                          <li className='mx-1' key={navItem.name}>
                              <span onClick={() => categorySelected(navItem.name)}>
                                  {navItem.name}
                              </span>
                          </li>
                      ))}
                  </ul>
              </nav>
            </div>
        </header>
    )
}

export default Nav