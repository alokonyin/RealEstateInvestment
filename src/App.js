import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './Navbar';
import Home from './Home';
// import Contact from './Contact';
import Properties from './Properties/Properties';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path="/properties" element={<Properties />} />
        {/* <Route path='/contact' element={<Contact/>} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;