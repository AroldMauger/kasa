import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx'
import About from './pages/About/About.jsx'
import ApartmentPage from './pages/ApartmentPage/ApartmentPage.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import "./router.scss";

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const HeaderFooterLayout = () => {
  return <>
  <main>
    <Header/>
    <Outlet/>
  </main>
  <Footer/>
   </>
}

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

  <RouterProvider router={router} />

)

