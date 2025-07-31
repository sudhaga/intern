import { useState } from "react";
import { Link } from "react-router-dom";

export default function HEADER() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md">
      <nav className="max-w-[85rem] w-full mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-fuchsia-600 text-2xl">Logo</h1>

        {/* Hamburger icon - visible on mobile only */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-2xl text-gray-700"></i>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-600 hover:text-red-600">Home</Link>
          <Link to="/About us" className="text-slate-600 hover:text-red-600">About us</Link>
          <Link to="/Blog" className="text-slate-600 hover:text-red-600">Blog</Link>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow-md">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-red-600">Home</Link>
          <Link to="/About us" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-red-600">About us</Link>
          <Link to="/Blog" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-red-600">Blog</Link>
        </div>
      )}
    </header>
  );
}
