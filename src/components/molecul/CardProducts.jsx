// Import Swiper React components
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";

export default function CardProducts(props) {
  const { data } = props;

  return (
    <Swiper
      className="items-center h-96 px-6"
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 5000 }}
      onSlideChange={console.log}
      onSwiper={console.log}
    >
      {data.map((product, index) => (
        <SwiperSlide key={index}>
          <Link
            to={`/productDetials/${product.id}`}
            key={index}
            className="mt-4 flex flex-col items-center relative mr-6 "
          >
            <img
              className="aspect-square w-36 h-40 object-top z-10 drop-shadow-md"
              src={product.image}
              alt=""
            />
            <div className=" flex flex-col border z-0 bg-white text-center w-32 h-52 p-4 rounded-3xl justify-between absolute top-24">
              <h1 className="mt-10  font-bold">{product.name}</h1>
              <h1 className="pt-12">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h1>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
