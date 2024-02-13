import "./NotFound404.scss";
import Header from '/src/layout/Header/Header.jsx'
import Footer from '/src/layout/Footer/Footer.jsx'
import NotFound404Content from "../NotFound404Content/NotFound404Content.jsx";


function NotFound404() {
  return (
    <div>
      <main>
        <Header/>
        <NotFound404Content/>
      </main>
      <Footer/>
    </div>
  

  )
}

export default NotFound404