import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdSearch, MdFavorite, MdShoppingCart } from "react-icons/md";

function Navbar() {
  const [isFixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category">Category</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/trending">Trending Products</Link></li>
    </>
  );

  return (
    <div
      className={`w-full border-y-1 border-gray-200 transition-all duration-300 bg-white font-inter ${
        isFixed ? "fixed top-0 left-0 z-50 mt-0" : "relative"
      }`}
    >
      <div className="h-16 flex items-center justify-between px-4 md:px-20">
        {/* Navbar start */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <MdOutlineMenu className="w-6 h-6" />
          </div>
          <Link to="/" className="text-xl font-bold">BazarHut</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 font-medium text-gray-700">{links}</ul>

        {/* Navbar actions */}
        <div className="flex items-center gap-4">
          <MdSearch className="w-5 h-5 cursor-pointer" />

          <div className="relative cursor-pointer">
            <MdFavorite className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">8</span>
          </div>

          <div className="relative cursor-pointer">
            <MdShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">8</span>
          </div>

          {/* Avatar dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="w-10 rounded-full cursor-pointer overflow-hidden">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden bg-white border-t border-gray-200 p-4 space-y-2">
          {links}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
