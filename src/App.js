
import React from 'react';
import './css/style.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Food } from './features/food';
import { Header } from './features/header';
import { Footer } from './features/footer';
import { Body } from './features/home';
import { Signup } from './features/signup';
import { Login } from './features/login';

function App() {
  return (
    <BrowserRouter>
      <div className="main-content">
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/food" element={<Food />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login/:usersUname" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  )
}



export default App;
