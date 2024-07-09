import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pastella Home</h1>
        <p>현재 작업중으로, 하기 영어학습 입력창 이동 가능합니다.</p>
        <nav>
          <Link to="/" className="nav-button">Home</Link>
          {/* <Link to="/about" className="nav-button">About</Link> */}
          <Link to="/customize_list" className="nav-button">CustomizeList</Link>
          <Link to="/customize_detail" className="nav-button">CustomizeDetail</Link>
          {/* <Link to="/situation" className="nav-button">Situation</Link> */}
          {/* <Link to="/psychology" className="nav-button">Psychology</Link> */}
          {/* <Link to="/expression" className="nav-button">Expression</Link> */}
        </nav>
      </header>
    </div>
  );
}

export default App;
