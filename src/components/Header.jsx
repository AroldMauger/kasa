import React from 'react'
import "../sass/Header.scss";

function Header() {
  return (
    <header className="header-home">
        <div class="logo_container">
            <img src="logo-red.png" alt="Logo de Kasa" />
        </div>
        <nav class="navbar">
            <a>Accueil</a>
            <a>À propos</a>
        </nav>
    </header>
  )
}

export default Header