import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../redux/slice/AuthSlice";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Login() {
  // function login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error, success, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || success) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, success, navigate, dispatch]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const Dot = ({ active }) => (
    <span
      className={`h-3 w-3 rounded-full mx-1 ${
        active ? "bg-primary" : "bg-gray-300"
      }`}
    ></span>
  );
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleLogin = () => {
    console.log("Login");
  };
  return (
    <>
      <div className="overflow-hidden h-screen w-full">
        <Swiper
          className=""
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
                className="h-64 object-cover  w-full"
                src={image.url}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex  z-50 justify-center absolute top-56  w-full ">
          {images.map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </div>
        <div className="absolute z-20 bg-white  top-60 rounded-t-3xl p-4 w-full">
          <div className=" p-4">
            <h1 className="font-bold text-3xl "> Masuk</h1>
            <p>Silahkan masuk menggunakan email yang sudah terdaftar</p>
          </div>
          {error && <div className="text-red-500 p-4 ">{message}</div>}
          <div className="p-4">
            <form onSubmit={Auth} className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-3 ">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="border rounded-md p-4 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="border rounded-md p-4 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full mt-6">
                <button className="bg-primary text-white w-full p-4 rounded-full">
                  Masuk
                </button>
              </div>
              <div className="flex w-full justify-center items-center gap-x-3 ">
                <span>Belum punya akun ?</span>
                <span className=" text-md hover:font-bold hover:text-primary  hover:cursor-pointer">
                  Daftar Sekarang
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
