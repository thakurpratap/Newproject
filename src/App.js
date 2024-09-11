import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Shoppage from './components/Shoppage';
import Contactpage from './components/Contactpage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
        {/* <Route path="/navbar" exact element={<Navbar />} /> */}
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/aboutpage" exact element={<Aboutpage />} />
          <Route path="/shoppage" exact element={<Shoppage />} />
          <Route path="/contactpage" exact element={<Contactpage />} />
          <Route path="/product/:id" exact element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
