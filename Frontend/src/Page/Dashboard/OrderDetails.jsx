import { useState, useEffect } from "react";

const productHistory = [
    {
        id: "ORD001",
        date: "2025-08-21",
        status: "Delivered",
        products: [
            { id: "P001", name: "Product A", price: "$50.00", image: "https://i.ibb.co/KcsN3LMk/Breads-Bakery.png" }
        ],
    },
    {
        id: "ORD002",
        date: "2025-08-18",
        status: "Processing",
        products: [
            { id: "P003", name: "Product C", price: "$75.50", image: "https://i.ibb.co/KcsN3LMk/Breads-Bakery.png" },
        ],
    },
];

const OrderTablePage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => setOrders(productHistory), []);

    const cancelOrder = (orderId) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId && order.status === "Processing"
                    ? { ...order, status: "Cancelled" }
                    : order
            )
        );
    };

    return (
        <div className="p-2 md:p-6">
            <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Products</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>
                                    <span className={`badge ${order.status === "Delivered" ? "badge-success" : order.status === "Processing" ? "badge-warning" : "badge-error"}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex flex-col gap-2">
                                        {order.products.map((p) => (
                                            <div key={p.id} className="flex items-center gap-2">
                                                <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded" />
                                                <div>
                                                    <p className="font-medium text-sm">{p.name}</p>
                                                    <p className="text-gray-500 text-xs">{p.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    {order.status === "Processing" && (
                                        <button className="btn btn-xs btn-error" onClick={() => cancelOrder(order.id)}>
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col gap-4">
                {orders.map((order) => (
                    <div key={order.id} className="border-1 border-[#E5E7EB] rounded-lg p-4 shadow-sm bg-white">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-medium">{order.id}</p>
                            <span className={`badge ${order.status === "Delivered" ? "badge-success" : order.status === "Processing" ? "badge-warning" : "badge-error"}`}>
                                {order.status}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-2">{order.date}</p>
                        <div className="flex flex-col gap-2 mb-2">
                            {order.products.map((p) => (
                                <div key={p.id} className="flex items-center gap-2">
                                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded" />
                                    <div>
                                        <p className="font-medium text-sm">{p.name}</p>
                                        <p className="text-gray-500 text-xs">{p.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {order.status === "Processing" && (
                            <button className="btn btn-xs btn-error w-full" onClick={() => cancelOrder(order.id)}>
                                Cancel
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderTablePage;
