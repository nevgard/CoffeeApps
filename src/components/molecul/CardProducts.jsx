// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
          <div
            key={index}
            className="mt-4 flex flex-col items-center relative mr-6 "
          >
            <img
              className="aspect-square w-36 h-40 object-top z-10 drop-shadow-md"
              src={product.image}
              alt=""
            />
            <div className=" flex flex-col border z-0 bg-white text-center w-32 p-4 rounded-3xl justify-between absolute top-24">
              <h1 className="mt-10 mb-12 font-bold">{product.name}</h1>
              <h1 className="pt-12">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}