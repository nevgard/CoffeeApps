import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ButtonCategories(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data } = props;
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      // Scroll to the top of the page
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      setSelectedCategory(category);
      // Scroll to the corresponding section
      document.getElementById(category).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Swiper
      className="mt-12 items-center"
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 5000 }}
      onSlideChange={console.log}
      onSwiper={console.log}
    >
      {uniqueCategories.map((category, index) => (
        <SwiperSlide key={index}>
          <div
            onClick={() => handleCategoryClick(category)}
            className={` border text-xs px-4 py-2 rounded-full ${
              selectedCategory === category ? "bg-primary text-white" : ""
            }`}
          >
            <button>{category}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
