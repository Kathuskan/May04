import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/header.jsx';
import { Profile } from './pages/Profile.jsx';
import { Addtransactions } from './pages/addtransactions.jsx';
import { Viewtransactions } from './pages/viewtransactions.jsx';
import { Content } from './components/Content.jsx';
import { Signup } from './components/Signup.jsx';
import { Savings } from './pages/Savings.jsx';
import { Login } from './components/Login.jsx';
import { Footer } from './components/Footer.jsx';
import { Sidebar1 } from './components/Sidebar1.jsx';
import { Gamification } from './pages/Gamification.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar1 />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/home' element={<Content />} />
        <Route path="/addtransactions" element={<Addtransactions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/viewtransactions" element={<Viewtransactions />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/savings' element={<Savings/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;




