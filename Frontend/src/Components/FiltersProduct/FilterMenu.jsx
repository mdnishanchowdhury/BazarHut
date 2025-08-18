import { useState } from "react";
import ProductFilterList from "./ProductFilterList";
import { useProducts } from "../../Hook/useProducts";
import FilterBanner from "../../Page/ProductFilter/FilterBanner";
const ProductFilter = () => {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [statusFilter, setStatusFilter] = useState("");
  const { products, categories } = useProducts();

  //  Filtered Products
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "all" || p.category === selectedCategory;

    const matchPrice =
      Number(p.price) >= priceRange[0] && Number(p.price) <= priceRange[1];
    // All
    const matchStatus =
      statusFilter === "Stock In"
        ? Number(p.quantity) > 0
        : statusFilter === "Stock Out"
          ? Number(p.quantity) === 0
          : true;

    return matchCategory && matchPrice && matchStatus;
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-[259px_1fr] gap-6 max-w-[1360px]  mx-auto px-2  md:px-0">


      {/* Sidebar */}
    <aside className="bg-white shadow-md rounded-2xl p-4 md:sticky md:top-6 h-screen overflow-y-auto">


        <h2 className="text-xl font-semibold  mb-3">Widget price filter</h2>

        {/* Price Range */}
        <div className="h-px bg-gray-200 my-4" />

        <h2 className="font-semibold mb-2">Price Range</h2>
        <input type="range" min="0" max={Math.max(...products.map((p) => Number(p.price || 0)), 1000)} onChange={(e) => setPriceRange(([min]) => [min, Number(e.target.value)])} className="w-full" />
        <p className="text-sm">
          Price: ${priceRange[0]} – ${priceRange[1]}
        </p>
        {/* Categories */}
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`block w-full text-left px-3 py-2 rounded ${selectedCategory === "all" ? "font-bold text-[#634C9F]" : ""
                }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)} className={`block w-full text-left px-3 py-2  rounded ${selectedCategory === cat ? "font-bold text-[#634C9F]" : ""}`} >
                {cat}
              </button>
            </li>
          ))}
        </ul>



        {/* Status Filter */}
        <div className="h-px bg-gray-200 my-4" />
        <h2 className="font-semibold mb-2">Status</h2>
        <label className="block">
          <input type="radio" name="status" checked={statusFilter === ""} onChange={() => setStatusFilter("")} />{" "} All
        </label>

        <label className="block">
          <input type="radio" name="status" checked={statusFilter === "Stock In"} onChange={() => setStatusFilter("Stock In")} />{" "}
          Stock In
        </label>

        <label className="block">
          <input type="radio" name="status" checked={statusFilter === "Stock Out"} onChange={() => setStatusFilter("Stock Out")} />{" "}
          Stock Out
        </label>
      </aside>

      {/* Products */}
      <div className="overflow-x-auto">
        <aside className=" pb-[15px]">
          <FilterBanner></FilterBanner>
        </aside>

        <div className='bg-[#F3F4F6] rounded-md h-[50px] py-2.5 flex justify-between px-4'>
          <h2>Showing all {categories.length} Catagory</h2>
          <h2>Show: {products.length}</h2>
        </div>

        <ProductFilterList filteredProducts={filteredProducts} />
      </div>
    </div>


  );
}
export default ProductFilter;