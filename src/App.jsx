// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/About';
import HomePage from './Pages/Home';
import RootLayout from './Pages/Root';
import StorePage from './Pages/Store';
import ContactPage from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';

const products = [
  { id: 1, title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
  { id: 2, title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
  { id: 3, title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
  { id: 4, title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="Store" element={<StorePage />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="ProductDetails/:productId" element={<ProductDetails products={products} />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
