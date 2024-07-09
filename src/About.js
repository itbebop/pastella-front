// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <h1>About Page</h1>
        <p>This is the about page of my first React app.</p>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
}

export default About;
