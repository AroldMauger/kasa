import React from 'react'
import { Link } from "react-router-dom";
import "./NotFound404Content.scss";

function NotFound404Content() {
  return (
         <div className="error">
            <div className="error_number">404</div>
            <div className="error_text">Oups! La page que vous demandez n&apos;existe pas.</div>
            <Link to="/">
              <div className="error_back">Retourner sur la page d&apos;accueil</div>
            </Link>
        </div>
  )
}

export default NotFound404Content