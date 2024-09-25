import React  from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Aboutpage from './components/Aboutpage';
import Shoppage from './components/Shoppage';
import Contactpage from './components/Contactpage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path="/" exact element={<Dashboard />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/aboutpage" exact element={<Aboutpage />} />
          <Route path="/shoppage" exact element={<Shoppage />} />
          <Route path="/contactpage" exact element={<Contactpage />} />
          <Route path="/product/:id" exact element={<ProductDetails />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer/>

    </>
  );
}

export default App;
