import React, { useState } from 'react';
import NavItem from './NavItem';
import './Navbar.css';
const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'About', 'Services', 'Contact'];
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {tabs.map((tab) => (
          <NavItem
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
