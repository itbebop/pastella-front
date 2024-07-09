import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import CustomizeList from './pages/CustomizeList';
import CustomizeDetail from './pages/CustomizeDetail';
import Situation from './pages/Situation';
import Psychology from './pages/Psychology';
import Expression from './pages/Expression';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/customize_list" element={<CustomizeList />} />
        <Route path="/customize_detail" element={<CustomizeDetail />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/expression" element={<Expression />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
