import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './Pages/About';
import HomePage from './Pages/Home';
import RootLayout from './Pages/Root';
import StorePage from './Pages/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/About', element: <AboutPage /> },
      {path:'/Store', element: <StorePage/>},
      { path: '/Home', element: <HomePage /> }
    ]
  }
]);

function App() {
   return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
