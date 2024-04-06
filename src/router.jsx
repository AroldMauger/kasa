import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx'
import About from './pages/About/About.jsx'
import ApartmentPage from './pages/ApartmentPage/ApartmentPage.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import "./router.scss";
import { BrowserRouter } from 'react-router-dom';

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

{/*Ici on crée un Layout pour une mise en page uniforme. 
La balise <main> nous permet de définir des marges sur les côtés sans inclure le Footer */}

const HeaderFooterLayout = () => {
  return <>
  <main>
    <Header/>
    <Outlet/>
  </main>
  <Footer/>
   </>
}
{/*Ici on définit le layout, la page 404 qui se charge en cas d'erreur et les 3 routes avec leurs composants */}
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement: <NotFound404/>, 
    children :[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/apartments",
        element: <ApartmentPage/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/kasa">
    <RouterProvider router={router} />
  </BrowserRouter>
);


