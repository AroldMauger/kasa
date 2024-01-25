import "./notfound404.scss";
import Header from '/src/layout/Header/Header.jsx'
import Footer from '/src/layout/Footer/Footer.jsx'

import { Link } from "react-router-dom";


function NotFound404() {
  return (
    <div>
      <main>
        <Header/>
        <div className="error">
            <div className="error_number">404</div>
            <div className="error_text">Oups! La page que vous demandez n&apos;existe pas.</div>
            <Link to="/">
              <div className="error_back">Retourner sur la page d&apos;accueil</div>
            </Link>
        </div>
      </main>
      <Footer/>
    </div>
  

  )
}

export default NotFound404