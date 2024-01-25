import React from 'react'
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-home">
        <NavLink to="/" className="logo_container">
            <img src="logo-red.png" alt="Logo de Kasa" />
        </NavLink>
        <nav className="navbar">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">À propos</NavLink>
        </nav>
    </header>
  )
}

export default Header