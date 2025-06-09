import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><a href="#hero" style={{ color: '#766' }}>Home</a></li>
        <li><a href="#about" style={{ color: '#976' }}>About</a></li>
         <li><a href="#Academic" style={{ color: '#900' }}>Academic</a></li>
        <li><a href="#projects" style={{ color: '#897' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: '#796' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
