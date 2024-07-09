import React from 'react';
import { Link } from 'react-router-dom';

function Situation() {
  return (
    <div className="Situation">
      <header className="Situation-header">
        <h1>Situation Page</h1>
        <p>This is the Situation page of pastella React app.</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    </div>
  );
}

export default Situation;
