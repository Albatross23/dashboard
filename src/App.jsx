// App.jsx
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="grid-container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
