import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Portfolio</Link>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
