//src/components/layout/Sidebar.jsx 

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const linkStyle  =  "block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded";
    const activeLinkStyle = "bg-gray-300 font-bold";

    return (
        <aside className="w-64 bg-gray-100 p-4">
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Dashboard
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Inventory   
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Purchase Orders
                </NavLink>
                <NavLink to="/reports" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Sales Orders 
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Suppliers 
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Customers
                </NavLink>
                <NavLink to="/reports" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
                    Reports
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
