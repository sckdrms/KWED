import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'; // react-router-dom에서 Link를 임포트합니다
import '../css/Navbar.css';
import logo from '../img/logo-1280x720.png';

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className='container'>
        <img src={logo} className='logo' alt="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/system">System</Link></li>
          <li><Link to="/introduce">Introduce</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='*' element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
