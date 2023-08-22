import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />    
  },
  {
    path: "/login",
    element: <Login />,
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

