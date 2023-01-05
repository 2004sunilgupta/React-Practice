import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import RouteConfig from './router/RouterConfig';

function App() {
  return (
    
    // <BrowserRouter>
    // <RouteConfig/>
    // </BrowserRouter>
    <RouterProvider router={RouteConfig}></RouterProvider>
    
  );
}

export default App;
