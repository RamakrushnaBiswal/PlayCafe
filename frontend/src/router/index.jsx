// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link to="/" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">About</Link>
                </li>
                <li>
                    <Link to="/menu" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">Menu</Link>
                </li>
                <li>
                    <Link to="/boardgame" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">Boardgame</Link>
                </li>
                <li>
                    <Link to="/events" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">Events</Link>
                </li>
                <li>
                    <Link to="/book" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">My Book</Link>
                </li>
                <li>
                    <Link to="/reservation" className="navbar-link text-white transition duration-300 ease-in-out hover:text-gray-400 hover:scale-105 hover:underline hover:shadow-lg">Reservation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
