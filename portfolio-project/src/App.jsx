import { useState } from 'react'
import './App.css'
import ExplodingStack from './components/ExplodingStack'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'

function App() {
  // 1. Create the state here
  const [isStackOpen, setIsStackOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // 2. Function to toggle the stack (passed to child)
  const toggleStack = () => {
    setIsStackOpen(!isStackOpen);
  };

  return (
    <>
      <div className='appCon'>       
        <div className="nav">
           <p className="logo">My Portfolio</p>          
            <a onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>home</a>
            <a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>about</a>
            <a onClick={() => scrollToSection('education')} style={{cursor: 'pointer'}}>education</a>
            <a onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>contact</a>
            
            {/* 3. Add the onClick event to open the stack */}
            <a onClick={() => setIsStackOpen(true)} style={{cursor: 'pointer'}}>My Projects</a>
        </div>
      </div>
      
      <div id='home' className="container">
        <div className="greet">Hi. I am</div>
        <div className="name">Kutlwano Nhlapo</div>
        <div className="field"><span></span></div>
      </div>
      
      <div id='about'>
        <About/>        
      </div>
      
      <div id='education'>
        <Education/>
      </div>
       
      <div id='contact'>
        <Contact/>
      </div>
    
      {/* 4. Pass the state and the toggle function as props */}
      <ExplodingStack isOpen={isStackOpen} toggleStack={toggleStack} />
    </>
  )
}

export default App