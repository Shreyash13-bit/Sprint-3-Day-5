import React, { useState } from 'react';
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const themeStyle = {
    backgroundColor: isDark ? '#222' : '#fff',
    color: isDark ? '#fff' : '#000',
    padding: '30px',
    textAlign: 'center',
    minHeight: '100vh'
  };
  return (
    <div style={themeStyle}>
      <h2>{isDark ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};
export default ThemeToggle;
