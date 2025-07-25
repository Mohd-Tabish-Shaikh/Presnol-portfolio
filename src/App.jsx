import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from './Preloader/Preloader';
import Home from './Component/Home';
import Animation from './Component/Project';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About';





const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <>

    <Preloader loading={loading}/>
    <Navbar />
    <Home />
    <About/>
    <Animation />    
   <Skills/>
   <Contact/>

    {/* <ProjectSection/> */}

   
    </>
  )
}

export default App
