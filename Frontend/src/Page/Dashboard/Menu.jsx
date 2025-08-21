import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronRight, FaUserCircle, FaBox, FaHeart, FaMoneyBillWave, FaSlidersH, FaSignOutAlt, FaComments, FaEnvelope, FaTasks } from "react-icons/fa";

const Menu = () => {
    const location = useLocation();
    const [open, setOpen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setOpen(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const baseLink =
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors";

    const isActive = (path) => location.pathname === path;

    const MenuLink = ({ to, icon, label }) => (
        <li>
            <Link
                to={to}
                className={`${baseLink} ${isActive(to)
                    ? "bg-gray-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                    }`}
                onClick={() => window.innerWidth < 768 && setOpen(false)}
            >
                {icon}
                {open && <span>{label}</span>}
            </Link>
        </li>
    );

    return (
        <div
            className={`bg-white h-full p-4 shadow-md transition-all duration-300 ${open ? "w-64" : "w-20"
                }`}
        >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-3 border-b border-slate-200">
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    className="text-xl text-gray-600 hover:text-gray-900"
                >
                    {open ? <FaChevronRight /> : <FaBars />}
                </button>
                {open && <h2 className="text-gray-800 font-semibold">User Dashboard</h2>}
            </div>

            {/* E-Commerce Section */}
            <div className="py-4">
                {open && (
                    <p className="px-3 mb-2 text-xs font-semibold uppercase text-gray-400">
                        BazarHat
                    </p>
                )}
                <ul className="space-y-1">
                    <MenuLink to="/auth" icon={<FaUserCircle className="text-lg" />} label="Profile" />
                    <MenuLink to="/auth/orderDetails" icon={<FaBox className="text-lg" />} label="Orders" />
                    <MenuLink to="/auth/wishlists" icon={<FaHeart className="text-lg" />} label="Wishlist" />
                    <MenuLink to="/auth/payments/history" icon={<FaMoneyBillWave className="text-lg" />} label="Payment History" />
                    <MenuLink to="/auth/settings" icon={<FaSlidersH className="text-lg" />} label="Settings" />
                </ul>
            </div>

            {/* Apps Section */}
            <div className="py-4">
                {open && (
                    <p className="px-3 mb-2 text-xs font-semibold uppercase text-gray-400">
                        Apps
                    </p>
                )}
                <ul className="space-y-1">
                    <MenuLink to="/chats" icon={<FaComments className="text-lg" />} label="Chats" />
                    <MenuLink to="/email" icon={<FaEnvelope className="text-lg" />} label="Email" />
                    <MenuLink to="/tasks" icon={<FaTasks className="text-lg" />} label="Todo App" />
                </ul>
            </div>

            {/* Logout */}
            <div className="mt-6">
                <ul>
                    <MenuLink
                        to="/login"
                        icon={<FaSignOutAlt className="text-lg" />}
                        label="Logout"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Menu;
