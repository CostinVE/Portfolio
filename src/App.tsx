import { useState } from 'react'
import {Link} from "react-scroll"
import './App.css'
import './index.css'
import Navbar from './components/navbar'
import { Introduction } from './components/Introduction'
import { Skillset } from './components/Skillset'
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe'
import { Closing } from './components/Closing'

function App() {
  

  return (
    <>
      <section id='body' className='body d-flex flex-col h-screen w-full m-auto'>
      {/* Orientation */}
       
         <Navbar></Navbar>
         {/* Introduction */}
         <section id='introduction' className='d-flex, flex-row, justify-between'>
          <Introduction/>
          </section>
          {/* Skillset */}
          <section id='skillset' className='d-flex, flex-row, justify-between'>
          <Skillset/>
          </section>
          {/* Projects */}
          <section id='projects' className='d-flex, flex-col, text-left'>
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <Projects/>
          </section>
          {/* Contact */}
          <section id='contact' className='d-flex, flex-col, text-left'>
          <h2 className="text-2xl font-bold">Connect with Me</h2>
               <ContactMe/>
          </section>
          {/* Closing */}
          <section id='closing'>
          <h2 className="text-3xl font-bold mb-4 scroll-mt-20">Thank You!</h2>
          <Closing/>
          </section>
        
        </section>
    </>
  )
}

export default App
