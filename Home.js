import React from 'react'
import Navbar from '../Components/Navbar'
import Carou from '../Components/Carou'
import Footer from '../Components/Footer'

const Home = () => {
  return (
   <> 
   <div className="nav ">  
        <Navbar/>
      </div>
      <Carou/>
    <div style={{backgroundColor: "lightblue"}}><Footer/></div> 
    </>
  )
}

export default Home
