import React from 'react';
import './Navbar.css';
const NavItem = ({ label, isActive, onClick }) => {
  return (
    <li
      className={isActive ? 'nav-item active' : 'nav-item'}
      onClick={onClick}
    >
      {label}
    </li>
  );
};
export default NavItem;
