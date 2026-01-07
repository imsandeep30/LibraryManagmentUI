import React from 'react';
import './App.css';
import ProtectedRoute from './Components/protectedroute';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Hero from "./Components/hero";
import Home from "./Components/home";
import Intro from "./Components/intro";
import Manage from './Components/manage';
import Settings from './Components/settings';
import Login from './Components/login';
import Signup from './Components/signup';
import Contact from './Components/contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/manage" element={<ProtectedRoute><Manage /></ProtectedRoute>} />
        <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
