import React from 'react';

import { GlobeEuropeAfrica } from 'react-bootstrap-icons';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav--container">
        <div className="nav--logo">
          <GlobeEuropeAfrica />
        </div>
        <h5 className="nav--title">my travel Journal</h5>
      </div>
    </nav>
  );
};

export default Navbar;
