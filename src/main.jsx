import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const HeaderFooterLayout = () => {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    children :[
      {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>
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
