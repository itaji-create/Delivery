import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SaleDetails from './pages/SaleDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <SaleDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
