import { useState } from "react";
import Header from "../molecul/Header";

export default function Order() {
  const [selected, setSelected] = useState("ongoing");

  return (
    <div className="w-full h-screen">
      <Header url="/" text="Pesanan" />

      <div className="flex gap-x-3 w-full  items-center py-3 px-6">
        <div className="flex flex-col w-1/2 justify-center">
          <button
            className=" px-3 py-2 "
            onClick={() => setSelected("ongoing")}
          >
            Ongoing
          </button>
          {selected === "ongoing" && (
            <hr className="border-2 font-bold border-primary" />
          )}
        </div>
        <div className="flex flex-col w-1/2 justify-center">
          <button
            className=" px-3 py-2 "
            onClick={() => setSelected("history")}
          >
            History
          </button>
          {selected === "history" && (
            <hr className="border-2 font-bold border-primary" />
          )}
        </div>
      </div>
    </div>
  );
}
