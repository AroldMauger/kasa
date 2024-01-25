import React from 'react'
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-home">
        <NavLink to="/" class="logo_container">
            <img src="logo-red.png" alt="Logo de Kasa" />
        </NavLink>
        <nav class="navbar">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">À propos</NavLink>
        </nav>
    </header>
  )
}

export default Header