import React from 'react'
import "../sass/apartment.scss";
import { Outlet, Link } from "react-router-dom";



function Apartment() {
  return (
    <Link to="/apartements">
      <div className='card'>
            <p>Apartment</p>
      </div>
    </Link>
   
  )
}

export default Apartment