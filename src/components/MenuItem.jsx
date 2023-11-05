import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = () => {
    return (
        <div>
           <nav>
                <ul>
                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/'>Home</NavLink></li>

                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/about'>About</NavLink></li>

                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/blog'>Blog</NavLink></li>

                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/contact'>Contact</NavLink></li>

                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/project'>Project</NavLink></li>

                    <li><NavLink className={(nav) => {nav.isActive ? "active-item" : "pending-item"}} to='/service'>Service</NavLink></li>
                </ul>
           </nav>
        </div>
    );
};

export default MenuItem;