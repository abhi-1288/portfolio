import React, { useState } from 'react'
import Sticky from 'react-sticky-el';
import MainTop from './components/MainTop'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/assignment/Projects'
import Nav from './components/Nav'



function App() {

  const [copyright, setCopyright] = useState(false)

  return (
    <div className="">

      {/* <PulltoRefresh /> */}
      
      <div>
        <Sticky className="top-0 ">
          <Nav />
          {/* {copyright && <CopyrightPage className={className} setCopyright={setCopyright}   /> } */}
        </Sticky>

        <MainTop />

        <div className='border-t-2 border-slate-600 border-spacing-3 mx-8 my-4'></div>

        <Skills />

        <div className='border-t-2 border-slate-600 border-spacing-3 mx-8 my-4'></div>

        <Projects /> 
        {/* <ContentFormat /> */}

        <div className='border-t-2 border-slate-600 border-spacing-3 mx-8 my-4'></div>

        <Contact />

        <div className='border-t-2 border-slate-600 border-spacing-3 mx-8 my-4'></div>

        <div>
          <Footer copyright={copyright} setCopyright={setCopyright} />
        </div>
      </div>
    </div>

  )
}

export default App
