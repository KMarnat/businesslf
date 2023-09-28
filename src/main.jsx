import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './scss/index.scss';
import Homepage from './pages/Homepage/Homepage';
import ContactPage from './pages/ContactPage/ContactPage';
import SignupPage from './pages/SignupPage/SignupPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
