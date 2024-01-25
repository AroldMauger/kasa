import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const HeaderFooterLayout = () => {
  return <>
  <main>
    <Outlet/>
  </main>
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement: <NotFound404/>,
    children :[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/apartments",
        element: <App/>
      },
      {
        path: "/about",
        element: <App/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

