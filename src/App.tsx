import { useState } from 'react'
import {Link} from "react-scroll"
import './App.css'
import './index.css'
import Navbar from './components/navbar'
import { Introduction } from './components/Introduction'
import { Skillset } from './components/Skillset'

function App() {
  

  return (
    <>
      <section className='body d-flex flex-col overflow-y-scroll  h-screen w-full m-auto'>
      {/* Orientation */}
       
         <Navbar></Navbar>
         {/* Introduction */}
         <section className='d-flex, flex-row, justify-between'>
          <Introduction/>
          </section>
          <section className='d-flex, flex-row, justify-between'>
          <Skillset />
          </section>
       
        
        </section>
    </>
  )
}

export default App
