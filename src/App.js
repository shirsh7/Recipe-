import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import Aboutus from './pages/Aboutus';
const Background = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/utensils-near-yummy-dishes_23-2148113677.jpg?t=st=1740295807~exp=1740299407~hmac=dc1fda3efbf77ba8fc3a81aefafd67342fa2fc98621219b0150f29d715acb1cd&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '90vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
     
      <Navbar />
      
      
      {location.pathname === '/' && <Background />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
