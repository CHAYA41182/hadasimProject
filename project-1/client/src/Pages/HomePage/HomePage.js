import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>ברוכים הבאים למערכת קופ"ח</h1>
      <nav className="navigation-menu">
        <ul>
          <li>
            <Link to="/members" className="nav-link">
              רשימת חברי הקופ"ח
            </Link>
            <p className="nav-description">צפו ברשימת כל חברי הקופ"ח</p>
          </li>
          <li>
            <Link to="/add-member" className="nav-link">
              הוספת חבר חדש
            </Link>
            <p className="nav-description">הוסיפו חבר חדש למערכת הקופ"ח</p>
          </li>
          <li>
            <Link to="corona-information" className="nav-link">
              מידע על הקורונה
            </Link>
            <p className="nav-description">קבלו מידע על מספר החולים הפעילים וכמות המחוסנים</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
