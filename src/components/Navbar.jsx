import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img src="logo-red.png" alt="Logo de Kasa" />
        </div>
        <div>
            <span>Accueil</span>
            <span>À propos</span>
        </div>
    </nav>
  )
}

export default Navbar