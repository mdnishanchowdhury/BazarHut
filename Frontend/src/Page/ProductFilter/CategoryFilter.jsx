const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
    <>
        <h2 className="font-semibold mb-2">Categories</h2>
        <ul className="space-y-1 mb-4">
            <li>
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`block w-full text-left px-3 py-2 rounded ${selectedCategory === "all" ? "font-bold text-[#634C9F]" : ""}`}
                >All</button>
            </li>
            {
                categories.map((cat, i) => (
                    <li key={i}>
                        <button
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`block w-full text-left px-3 py-2 rounded ${selectedCategory === cat.name ? "font-bold text-[#634C9F]" : ""}`}
                        >{cat.name}</button>
                    </li>
                ))
            }
        </ul>
    </>
);

export default CategoryFilter;
