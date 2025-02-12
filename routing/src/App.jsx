import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import About from './Componants/About/About';
import Portoflio from './Componants/Portoflio/Portoflio';
import Contact from './Componants/Contact/Contact';
import Notfound from './Componants/Notfound/Notfound';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Home from './Componants/Home/Home';
let x = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index:true , element: <Home/> } ,
      { path: 'about', element: <About /> } ,
      { path: 'portoflio', element: <Portoflio /> } ,
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> }

    ]
  }
]);

const App = () => {
  return <RouterProvider router={x}></RouterProvider>;
};

export default App;
