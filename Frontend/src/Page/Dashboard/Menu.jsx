import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {FaBars,
    FaChevronRight,
    FaUserCircle,
    FaBox,
    FaHeart,
    FaMoneyBillWave,
    FaSlidersH,
    FaSignOutAlt,
    FaComments,
    FaEnvelope,
    FaTasks,
} from "react-icons/fa";

const sections = [
    {
        title: "E-Commerce",
        items: [
            { path: "/auth", label: "Profile", icon: <FaUserCircle /> },
            { path: "/auth/room", label: "Orders", icon: <FaBox /> },
            { path: "/auth/mealbooking", label: "Wishlist", icon: <FaHeart /> },
            { path: "/auth/payments/history", label: "Payment History", icon: <FaMoneyBillWave /> },
            { path: "/auth/settings", label: "Settings", icon: <FaSlidersH /> },
        ],
    },
    {
        title: "Apps",
        items: [
            { path: "/chats", label: "Chats", icon: <FaComments /> },
            { path: "/email", label: "Email", icon: <FaEnvelope /> },
            { path: "/tasks", label: "Todo App", icon: <FaTasks /> },
        ],
    },
];

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

    return (
        <aside
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

            {/* Sections */}
            <div className="flex-1 py-4 space-y-6">
                {sections.map(({ title, items }) => (
                    <div key={title}>
                        {open && (
                            <p className="px-3 mb-2 text-xs font-semibold uppercase text-gray-400">
                                {title}
                            </p>
                        )}
                        <ul className="space-y-1">
                            {items.map(({ path, label, icon }) => {
                                const isActive = location.pathname.startsWith(path);
                                return (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className={`${baseLink} ${isActive
                                                    ? "bg-gray-100 text-purple-600"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                                                }`}
                                            onClick={() => window.innerWidth < 768 && setOpen(false)}
                                        >
                                            <span className="text-lg">{icon}</span>
                                            {open && <span>{label}</span>}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}

                {/* Logout */}
                <div>
                    <ul>
                        <li>
                            <Link
                                to="/login"
                                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-500 hover:text-red-400 hover:bg-red-50"
                            >
                                <FaSignOutAlt className="text-lg" />
                                {open && <span>Logout</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Menu;
