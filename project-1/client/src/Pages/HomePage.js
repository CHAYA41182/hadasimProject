import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Health Fund System</h1>
      <nav className="navigation-menu">
        <ul>
          <li>
            <Link to="/members" className="nav-link">
              View Member List
            </Link>
            <p className="nav-description">Browse all health fund members</p>
          </li>
          <li>
            <Link to="/add-member" className="nav-link">
              Add New Member
            </Link>
            <p className="nav-description">Register a new member to the health fund</p>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
