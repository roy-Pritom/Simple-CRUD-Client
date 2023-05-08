import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './Components/User.jsx';
import Update from './Components/Update/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:'/user',
    element:<User></User>,
    loader:()=>fetch('http://localhost:4000/user')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:4000/user/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
