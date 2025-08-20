import { useEffect, useState } from "react";
import Cards from "../../Components/Products/Cards";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

function ProductCards() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  // catagory  url
  const handleViewAllClick = () => {
    navigate("/productFilter");
  };

  useEffect(() => {
    axiosPublic.get("/products")
      .then((res) => {
        const data = res.data;
        setItems(data.slice(0, 12));
      });
  }, []);

  return (
    <div className="mt-2 w-full px-2 md:px-0">

      {/* Header */}
      <div className="flex items-center justify-between my-5">
        <div>
          <h2 className="text-[18px] font-bold">Category Products</h2>
          <p className="text-[8px] md:text-sm text-[#9CA3AF] font-normal">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <button onClick={handleViewAllClick} className="text-sm text-gray-700 border px-4 py-1 rounded-full hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      <Cards items={items}></Cards>
    </div>
  );
}

export default ProductCards;
