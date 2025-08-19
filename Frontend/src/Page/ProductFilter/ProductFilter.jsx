import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductFilterList from "../../Components/FiltersProduct/ProductFilterList";
import FilterBanner from "../../Components/FiltersProduct/FilterBanner";
import { useProducts } from "../../Hook/useProducts";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";

const ProductFilter = () => {
  const { products, categories, priceRange: defaultPriceRange, setPriceRange } = useProducts();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setSelectedPriceRange] = useState(defaultPriceRange);
  const [statusFilter, setStatusFilter] = useState("");

  // priceRange
  useEffect(() => {
    if (products.length) {
      const minPrice = Math.min(...products.map((p) => Number(p.price || 0)));
      const maxPrice = Math.max(...products.map((p) => Number(p.price || 0)));
      setSelectedPriceRange([minPrice, maxPrice]);
      setPriceRange([minPrice, maxPrice]);
    }
  }, [products]);

  // Filter Products
  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchPrice = Number(p.price) >= priceRange[0] && Number(p.price) <= priceRange[1];
    const matchStatus =
      statusFilter === "Stock In"
        ? Number(p.quantity) > 0
        : statusFilter === "Stock Out"
          ? Number(p.quantity) === 0
          : true;
    return matchCategory && matchPrice && matchStatus;
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-[259px_1fr] gap-6 max-w-[1360px]  mx-auto px-2  md:px-0 ">

      {/* Sidebar */}
      <aside className="bg-white shadow-md rounded-2xl p-4 md:sticky md:top-6 h-[600px] overflow-y-auto ">
        <h2 className="text-xl font-semibold mb-4">Widget Filters</h2>

        {/* Price Range */}
        <PriceFilter priceRange={priceRange} setSelectedPriceRange={setSelectedPriceRange} products={products} />

        {/* Categories */}
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/* Status Filter */}
        <StockFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
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
};
export default ProductFilter;
