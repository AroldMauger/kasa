import React from 'react'
import "./Apartment.scss";
import { Outlet, Link } from "react-router-dom";



function Apartment() {
  return (
    <Link to="/apartments">
      <div className='card'>
            <p>Apartment</p>
      </div>
    </Link>
   
  )
}

export default Apartment