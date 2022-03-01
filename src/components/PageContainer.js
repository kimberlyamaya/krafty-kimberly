import React, {useState} from 'react'
import About from './pages/About'
import Nav from './Nav'
// import Foot from './components/Foot'
import Portfolio from './pages/Project'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Foot from './pages/Foot'

function PageContainer() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About currentPage={currentPage}/>
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio currentPage={currentPage}/>
    }
    if (currentPage === 'Contact') {
      return <Contact currentPage={currentPage}/>
    }
    if (currentPage === 'Resume') {
      return <Resume currentPage={currentPage}/>
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div id='page-container'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <section className='page-section'>
      {renderPage()}
      </section>
       <Foot />
    </div>

  );
}

export default PageContainer;
