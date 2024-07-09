import React from 'react';
import { Link } from 'react-router-dom';

function Psychology() {
  return (
    <div className="Psychology">
      <header className="Psychology-header">
        <h1>Psychology Page</h1>
        <p>This is the Psychology page of pastella React app.</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    </div>
  );
}

export default Psychology;
