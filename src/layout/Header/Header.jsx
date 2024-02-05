import React from 'react'
import "./Header.scss";
import { NavLink } from "react-router-dom";

{/*NavLink ajoute automatiquement une classe "active" au lien lorsqu'il correspond à l'URL actuelle. */}

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