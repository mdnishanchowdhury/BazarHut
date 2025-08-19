const StockFilter = ({ statusFilter, setStatusFilter }) => (
    <>
        <div className="h-px bg-gray-200 my-4" />
        <h2 className="font-semibold mb-2">Stock Status</h2>
        <label className="block mb-1">
            <input type="radio" name="status" checked={statusFilter === ""} onChange={() => setStatusFilter("")} />
            All
        </label>
        <label className="block mb-1">
            <input type="radio" name="status" checked={statusFilter === "Stock In"} onChange={() => setStatusFilter("Stock In")} /> Stock In
        </label>
        <label className="block mb-1">
            <input type="radio" name="status" checked={statusFilter === "Stock Out"} onChange={() => setStatusFilter("Stock Out")} /> Stock Out
        </label>
    </>
);

export default StockFilter;
