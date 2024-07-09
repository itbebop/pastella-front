import React from 'react';
import './AdminHeader.css';

function AdminHeader({ title, description }) {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </header>
  );
}

export default AdminHeader;