import { useEffect, useState } from "react";
import Cards from "../../Components/Products/Cards";

function ProductCards() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div>
      <Cards items={items}></Cards>
    </div>
  );
}

export default ProductCards;
