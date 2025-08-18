import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Catagory() {
    const [catagory, setCatagory] = useState([]);

    useEffect(() => {
        fetch('/catagory.json')
            .then(res => res.json())
            .then(data => setCatagory(data));
    }, []);

    return (
        <div className="mt-12 font-inter">
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                className="catagorySwiper"
                breakpoints={{
                    0: { slidesPerView: 4, spaceBetween: 8 },
                    480: { slidesPerView: 5, spaceBetween: 10 },
                    768: { slidesPerView: 6, spaceBetween: 12 },
                    1024: { slidesPerView: 7, spaceBetween: 15 },
                    1280: { slidesPerView: 9, spaceBetween: 10 }
                }}
            >
                {catagory.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[80px] sm:w-[100px] md:w-[122px] h-[80px] sm:h-[100px] md:h-[122px] object-cover bg-[#F3F4F6] rounded-full shadow-sm 
                                           transition-transform duration-300 ease-in-out 
                                           group-hover:scale-110 group-hover:shadow-xl"
                            />
                            <h2 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-800 text-center 
                                           transition-all duration-300 ease-in-out 
                                           group-hover:text-blue-600 group-hover:-translate-y-1">
                                {item.name}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* swiper css apply */}
            <style jsx>
                {`
                .catagorySwiper .swiper-pagination {
                    position: relative !important; 
                    margin-top: 10px;           
                    bottom: auto !important;    
                }
                `}
            </style>
        </div>
    );
}

export default Catagory;
