import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Header from "../molecul/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/slice/productByIdSlice";
import Loading from "../Atom/Loading";

export default function DetailProducts() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector((state) => state.productById);
  console.log(product);

  const [totalPrice, setTotalPrice] = useState(product ? product.price : 0);
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({
    temp: "hot",
    size: "regular",
    milk: "regular",
    ice: "normal",
    sugar: "normal",
  });
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      handleTotalPrice();
    }
  }, [product, options, quantity]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOptionClick = (option, value) => {
    setOptions((prevOptions) => ({ ...prevOptions, [option]: value }));
  };

  const handleTotalPrice = () => {
    if (product.price && !isNaN(product.price)) {
      let total = Number(product.price);
      if (options.size === "large") {
        total += 2000;
      }
      if (options.milk === "oat") {
        total += 1000;
      }
      setTotalPrice(Number(total * quantity));
    }
  };
  console.log(totalPrice);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full flex flex-wrap bg-neutral-200">
      <Header url="/"></Header>
      {/* container image */}
      <div
        id="image"
        className="w-full flex flex-col justify-center items-center p-4 m-4 shadow-md rounded-lg bg-white "
      >
        <span className="font-bold text-xl">{product && product.name}</span>
        <span className="text-slate-500 text-sm">
          {product && product.category}
        </span>
        <img src={product.image} alt="" className="w-64 h-80 object-center" />
      </div>
      {/* container option detail */}
      <div
        id="option"
        className="w-full p-4 m-4 shadow-md rounded-lg bg-white "
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold">Temp</span>
          </div>
          <div className="gap-x-3 flex ">
            <button
              className={`buttonOption ${
                options.temp === "ice" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("temp", "ice")}
              value={"ice"}
            >
              Ice
            </button>
            <button
              className={`buttonOption ${
                options.temp === "hot" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("temp", "hot")}
              value={"hot"}
            >
              Hot
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="font-bold">Size</span>
          </div>
          <div className="gap-x-3 flex ">
            <button
              className={`buttonOption ${
                options.size === "large" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("size", "large")}
              value={"large"}
            >
              Large
            </button>
            <button
              className={`buttonOption ${
                options.size === "regular" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("size", "regular")}
              value={"regular"}
            >
              Regular
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="font-bold">Milk</span>
          </div>
          <div className="gap-x-3 flex ">
            <button
              className={`buttonOption ${
                options.milk === "oat" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("milk", "oat")}
            >
              Oat
            </button>
            <button
              className={`buttonOption ${
                options.milk === "regular" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("milk", "regular")}
            >
              Regular
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="font-bold">Ice</span>
          </div>
          <div className="gap-x-3 flex ">
            <button
              className={`buttonOption ${
                options.ice === "less" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("ice", "less")}
            >
              Less
            </button>
            <button
              className={`buttonOption ${
                options.ice === "normal" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("ice", "normal")}
            >
              Normal
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="font-bold">Sugar</span>
          </div>
          <div className="gap-x-3 flex ">
            <button
              className={`buttonOption ${
                options.sugar === "less" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("sugar", "less")}
            >
              Less
            </button>
            <button
              className={`buttonOption ${
                options.sugar === "normal" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("sugar", "normal")}
            >
              Normal
            </button>
          </div>
        </div>
      </div>

      {/* container messages */}
      <div className="w-full p-4 m-4 shadow-md rounded-lg bg-white flex flex-col">
        <label className="">
          {" "}
          <strong>Catatan</strong> (optional)
        </label>
        <input
          type="text"
          placeholder="Masukan catatan pesanan kamu"
          className="border px-4 py-3 mt-3  rounded-md  focus:outline-none focus:ring-2 focus:ring-[#556052] focus:border-transparent"
        />
        <span className="self-end font-thin text-sm mt-1">
          Max 23 karakter{" "}
        </span>
      </div>
      <footer className="w-full px-6 py-4 bg-white sticky bottom-0 rounded-t-3xl drop-shadow-2xl">
        <div className="flex justify-between items-center">
          <span id="price" className="text-xl font-bold">
            {totalPrice}
          </span>
          <div className="flex gap-x-3 ">
            <button
              className="border border-primary p-2 rounded-[100%] "
              onClick={handleIncrement}
            >
              <FaPlus />
            </button>

            <span id="quantity" className="text-2xl">
              {" "}
              {quantity}
            </span>
            <button
              id="decrease"
              className="border border-primary p-2 rounded-[100%]"
              onClick={handleDecrement}
            >
              <FaMinus />
            </button>
          </div>
        </div>

        <button className="bg-primary text-white mt-3 rounded-full  w-full py-3">
          Pesan Sekarang
        </button>
      </footer>
    </div>
  );
}
