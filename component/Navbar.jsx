import React from 'react';
import { FaHome, FaUtensils, FaInfoCircle, FaBookOpen } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#34495e" }}> {/* Custom color */}
      <div className="container-fluid">
        
        <a className="navbar-brand d-flex align-items-center text-light" href="/">
          <FaBookOpen className="me-2 text-warning" size={24} /> Welcome
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
          
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="navbar-brand d-flex align-items-center text-light" href="/">
                <FaHome className="me-2 text-warning" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand d-flex align-items-center text-light" href="/menu">
                <FaUtensils className="me-2 text-danger" /> Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand d-flex align-items-center text-light" href="/about-us">
                <FaInfoCircle className="me-2 text-primary" /> About Us
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <a className="btn btn-info me-2" href="/login">Login</a>
            <a className="btn btn-success" href="/register">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
