import React from 'react';
import './Layout.css';
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">My Website</header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">© 2025 Shreyash Roy</footer>
    </div>
  );
};
export default Layout;
