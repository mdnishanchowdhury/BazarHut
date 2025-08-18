import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      const items = Array.isArray(data) ? data : data?.products ?? [];
      setProducts(items);

      const uniqueCategories = [...new Set(items.map((p) => p.category))];
      setCategories(uniqueCategories);

      if (items.length) {
        const minPrice = Math.min(...items.map((p) => Number(p.price || 0)));
        const maxPrice = Math.max(...items.map((p) => Number(p.price || 0)));
        setPriceRange([minPrice, maxPrice]);
      }
    };

    loadData();
  }, []);

  return { products, categories, priceRange, setPriceRange };
}
