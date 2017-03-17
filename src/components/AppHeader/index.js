import React from 'react';
import sjLogo from '../../assets/sj.jpg';
import './index.css';

// AppHeader renders the site logo and title
function AppHeader() {
  return (
    <div className="app-header">
      <img src={sjLogo} className="app-logo" alt="logo" />
      <h2 className="app-title">Samuel HK Jackson</h2>
    </div>
  );
}

export default AppHeader;
