import ProductsList from "../../constant/ProductsList";

// import icon
import { CiDiscount1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCoins1 } from "react-icons/ci";
import { SiExpertsexchange } from "react-icons/si";
import { CiGift } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { useState } from "react";
import KopiSiganture from "../organism/KopiSiganture";
import KopiLokal from "../organism/KopiLokal";
import NonCoffee from "../organism/Non-Coffee";
import Tea from "../organism/Tea";
import NewReleases from "../organism/NewReleases";
import Categories from "../organism/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Homepage({ isOpen, toggleSideBar }) {
  const dispatch = useDispatch();

  const { user, success, loading, error } = useSelector((state) => state.auth);
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeOption, setActiveOption] = useState("Take Away");
  const Dot = ({ active }) => (
    <span
      className={`h-3 w-3 rounded-full mx-1 ${
        active ? "bg-primary" : "bg-gray-300"
      }`}
    ></span>
  );

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1517349850832-cd9ec299c131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1516995087338-f67d72d1cc07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1521677633993-721dd3f95c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1558909552-8fcf7c94b575?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleSlideChange = () => {
    if (swiper !== null) {
      setCurrentIndex(swiper.realIndex);
    }
  };

  return (
    <div className="flex flex-wrap w-full flex-col gap-y-3 items-center relative">
      <div className="w-full bg-primary h-56">
        <nav className="flex px-4 pt-16">
          <div className=" w-3/4 flex justify-start items-center text-white p-3">
            <div className="flex gap-x-3 items-center text-2xl">
              <button onClick={toggleSideBar}>
                <CiMenuFries />
              </button>
              {user && (
                <span className="text-pretty">
                  {"Hi! "}
                  {user.fullName}
                </span>
              )}
            </div>
          </div>
          <div className=" w-full gap-x-3 flex justify-end items-center text-white p-3">
            <span className="bg-white text-black text-3xl p-2 rounded-full">
              <IoIosNotificationsOutline />
            </span>
            <div className="bg-white text-black text-3xl p-2 rounded-full ">
              <CiDiscount1 />
            </div>
          </div>
        </nav>
      </div>
      <div className="z-10 absolute w-10/12 top-3/4">
        <div className=" bg-white py-6 rounded-3xl shadow-lg grid grid-cols-3 justify-center text-center">
          <div className="flex flex-col items-center p-4 border-r-2 border-slate-300">
            <div className="text-xl bg-primary text-white p-2 rounded-full">
              <SiExpertsexchange />
            </div>
            <span className=" font-bold text-sm">Jiwa</span>
            <span className="text-xs text-slate-500">81/100 XP</span>
          </div>
          <div className="flex flex-col items-center p-4 border-r-2 border-slate-300">
            <div className="text-xl bg-primary text-white p-2 rounded-full">
              <CiCoins1 />
            </div>
            <span className="lg font-bold text-sm">JIwa Point</span>
            <span className="text-xs text-slate-500">2.000 Points</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="text-xl bg-primary text-white p-2 rounded-full">
              <CiGift />
            </div>
            <span className="font-bold text-sm">New Feature</span>
            <span className="text-xs text-slate-500">Coming Soon</span>
          </div>
        </div>
        {/* carousel image section */}
        <Swiper
          className="mt-12"
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-3xl w-full"
                src={image.url}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </div>
        {/* end carousel image section */}

        {/* delivery/takeway */}
        <div className="text-center mt-8 grid grid-cols-2 bg-slate-50 border-2 p-1 rounded-full">
          <div
            className={`cursor-pointer p-3 rounded-full ${
              activeOption === "Take Away" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleOptionClick("Take Away")}
          >
            Take Away
          </div>
          <div
            className={`cursor-pointer p-3 rounded-full ${
              activeOption === "Delivery" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleOptionClick("Delivery")}
          >
            Delivery
          </div>
        </div>
        {/* end delivery/takeway */}

        {/* location store */}
        <div className="text-center mt-8 grid grid-cols-3 p-3 items-center bg-white shadow-sm border rounded-xl ">
          <div className="">Store </div>
          <div className="">Pekalongan</div>
          <div>Change</div>
        </div>

        {/* end location store */}

        {/* products */}
        <div id="products" className="mt-12 ">
          {/* navigation menu products */}
          <Categories />
          {/* end navigation menu products */}
          <NewReleases />
          <KopiSiganture />
          <KopiLokal />
          <NonCoffee />
          <Tea />
        </div>

        {/* end products */}
      </div>
    </div>
  );
}
