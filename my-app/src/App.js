import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registr from './components/Registr';
import Postapp from './components/Postapp';
import Index from './containers/students/index';
import User from './containers/User';
import './App.css';
function App() {
  return (
    <div>
      <ToastContainer />
     <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registr" element={<Registr />} />
        <Route path="index" element={<Index />} />
        <Route path="user" element={<User />} />
        <Route path="postapp" element={<Postapp />} />
      </Routes>
    </div>
  );
}

export default App;