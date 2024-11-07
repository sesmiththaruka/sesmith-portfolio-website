import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import MyProjects from './components/MyProjects'
import MyContact from './components/MyContact'
import HireMeSection from './components/HireMeSection'


const App = () => {
  return (
    // for icon visible
    <div className='overflow-x-hidden text-neutral-300 antialiased 
   selection:bg-cyan-300 selection:text-cyan-900'>
      {/* // for icon visible */}

      {/* color for when selecting text */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {/* color for when selecting text */}


      <div className="mt-[200px] container mx-auto px-8">
        <Navbar />
        <Hero />
        {/* <AboutMe /> */}
        <Technologies/>
        <Experience/>
        <MyProjects/>
        <HireMeSection/>
        <MyContact/>
      </div>

    </div>
  )
}

export default App
