import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu, MdSearch, MdFavorite, MdShoppingCart } from "react-icons/md";
import Avatar from "../../Components/Navbar/Avatar";
import { useProducts } from "../../Hook/useProducts";
function Navbar() {
  const linkClass = "text-[15px] font-semibold transition-all duration-300 hover:text-blue-600 hover:translate-y-[-2px]";
  const [isFixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // catagories
  const { categories } = useProducts();
  const navigate = useNavigate();

  const handleCategoryClick = (catName) => {
    navigate(`/productFilter?category=${encodeURIComponent(catName)}`);
  };


  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <Link className={linkClass} to="/">Home</Link>
      <li className="relative group">
        <span className={linkClass}>Categories</span>
        <ul className="absolute left-0 top-full hidden group-hover:block bg-white p-2 rounded shadow-lg min-w-[200px] z-50">
          {
            categories.map(item => (
              <button onClick={() => handleCategoryClick(item.name)} key={item.id}
                className="block px-2 py-1 hover:bg-gray-100"> {item.name}
              </button>
            ))
          }
        </ul>
      </li>
      <li><Link className={linkClass} to="/blog">Blog</Link></li>
      <li><Link className={linkClass} to="/contact">Contact</Link></li>
      <li><Link className={linkClass} to="/trending">Trending Products</Link></li>
    </>
  );

  return (
    <div
      className={`w-full border-y-1 border-gray-200 transition-all duration-300 bg-white font-inter ${isFixed ? "fixed top-0 left-0 z-50 mt-0" : "relative"
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
          <Avatar></Avatar>
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
