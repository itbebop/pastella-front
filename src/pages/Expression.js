import React from 'react';
import { Link } from 'react-router-dom';

function Expression() {
  return (
    <div className="Expression">
      <header className="Expression-header">
        <h1>Expression Page</h1>
        <p>This is the Expression page of pastella React app.</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    </div>
  );
}

export default Expression;
