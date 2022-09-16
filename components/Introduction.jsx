import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import '../components/introduction.css';


const Introduction = () => {
  let navigation = useNavigate()
  return (
    <div>
 {/* header work */}
      <div className='header'>
        <p>Profile</p>
        
        <p>Fasih</p>

      </div>
       {/* body Work */}
      <div className='body-work'>
        <p>A Coders Life: Problematic but Charismatic.</p>
      </div>
      {/* Footer work */}
      <div onClick={() => navigation("/")}>
        <h3 style={{cursor:"pointer"}}>Menu</h3>
      </div>
      {/* <div onClick={() => navigation("/introduction")}>
   <p>Introduction</p>
  </div> */}
      <div onClick={() => navigation("/education")}>
        <p style={{cursor:"pointer",fontSize:"larger"}}>Education</p>
      </div>

      <div onClick={() => navigation("/exp")}>
        <p style={{cursor:"pointer",fontSize:"larger"}}>Experiense</p>
      </div>
      <div onClick={() => navigation("/contact")}>
        <p style={{cursor:"pointer",fontSize:"larger"}}>Contact</p>
      </div>
      <Outlet />
    </div>

  )
}

export default Introduction