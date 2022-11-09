import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';


function Homepage()
{
  useEffect(() => {
        document.title = "National Quick Travel";
  });
  

  return (
    <div className='container'>
      <h1>TEAM PROJECT FOR COMP231</h1>
      <hr/>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink to={"/home"} className="nav-link" aria-current="page">
          <i className="fa-solid fa-house-signal fa-lg"></i> Home </NavLink>
          <br/>
        <NavLink to={"/searchflight"} className="nav-link" aria-current="page">
          <i className="fa-solid fa-circle-info fa-lg"></i> Search Flight</NavLink>
          <br/>
        <NavLink to={"/searchhotel"} className="nav-link" aria-current="page">
          <i className="fa-solid fa-diagram-project fa-lg"></i> Search Hotel</NavLink>
          <br/>
        <NavLink to={"/searchboth"} className="nav-link" aria-current="page">
          <i className="fa-solid fa-signs-post fa-lg"></i> Search Flight & Hotel</NavLink>
          <br/>      
      </div>
    </div>
  )
}

export default Homepage;
