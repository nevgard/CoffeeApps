import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import ProductsList from "../../constant/ProductsList";
import { useState } from "react";

export default function DetailProducts() {
  const { id } = useParams();
  const data = ProductsList.find((product) => product.id === parseInt(id, 10));
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({
    temp: "hot",
    size: "regular",
    milk: "regular",
    ice: "normal",
    sugar: "normal",
  });

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
  const totalPrice = quantity * data.price;

  console.log(options);
  return (
    <div className="w-full flex flex-wrap bg-neutral-200">
      <div id="header" className="w-full px-4 py-3 shadow-md bg-white">
        <Link to={"/"}>
          <IoChevronBackCircleOutline className=" text-4xl text-primary " />
        </Link>
      </div>
      {/* container image */}
      <div
        id="image"
        className="w-full flex flex-col justify-center items-center p-4 m-4 shadow-md rounded-lg bg-white "
      >
        <span className="font-bold text-xl">{data.name}</span>
        <span className="text-slate-500 text-sm">{data.category}</span>
        <img src={data.image} alt="" className="w-64 h-80 object-center" />
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
            {totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
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
