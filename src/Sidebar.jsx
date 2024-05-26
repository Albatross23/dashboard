// Sidebar.jsx
import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillBarChartFill, BsFillGearFill, BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className="sidebar-title">
        <BsFillPersonFill className="icon_header" style={{ fontSize: '100px' }} /> {/* Profile icon */}
        <div className="sidebar-brand">Saniya</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="/Dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/Activity_report">
            <BsFillBarChartFill className="icon" /> Activity Report
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/App_usage">
            <BsFillGearFill className="icon" /> App Usage
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/Home">
            <BsFillGearFill className="icon" /> Home
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
