const PriceFilter = ({ priceRange, setSelectedPriceRange, products }) => (
    <>
        <div className="h-px bg-gray-200 my-4" />
        <h2 className="font-semibold mb-2">Price Range</h2>

        {/* Number Inputs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 gap-2">
            <input
                type="number"
                min="0"
                max={Math.max(...products.map((p) => Number(p.price || 0)), 1000)} value={priceRange[0]} onChange={(e) =>
                    setSelectedPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])}
                className="border w-full sm:w-20 px-2 py-1 rounded"
            />
            <span className="hidden sm:block">-</span>
            <input
                type="number"
                min="0"
                max={Math.max(...products.map((p) => Number(p.price || 0)), 1000)}
                value={priceRange[1]}
                onChange={(e) =>
                    setSelectedPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                }
                className="border w-full sm:w-20 px-2 py-1 rounded"
            />
        </div>
        <p className="text-sm mb-4">Price: ${priceRange[0]} – ${priceRange[1]}</p>
        
        {/* Range Sliders */}
        <div className="flex flex-col gap-2 mb-4">
            <input
                type="range"
                min={Math.min(...products.map((p) => Number(p.price || 0)), 0)}
                max={Math.max(...products.map((p) => Number(p.price || 0)), 1000)}
                value={priceRange[0]}
                onChange={(e) =>
                    setSelectedPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                }
                className="range w-full text-blue-300 [--range-bg:#F3F4F6] [--range-thumb:#634C9F] [--range-fill:0]"
            />
            <input
                type="range"
                min={Math.min(...products.map((p) => Number(p.price || 0)), 0)}
                max={Math.max(...products.map((p) => Number(p.price || 0)), 1000)}
                value={priceRange[1]}
                onChange={(e) =>
                    setSelectedPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                }
                className="range w-full text-blue-300 [--range-bg:#F3F4F6] [--range-thumb:#634C9F] [--range-fill:0]"
            />
        </div>
    </>
);

export default PriceFilter;
