import React, {useState} from 'react'
import About from './pages/About'
import Nav from './Nav'
// import Foot from './components/Foot'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function PageContainer() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      {renderPage()}
    </div>

  );
}

export default PageContainer;
