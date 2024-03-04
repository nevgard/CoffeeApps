import { Link } from "react-router-dom";
import Header from "../molecul/Header";
import { FaPlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Address() {
  return (
    <div className="w-full h-screen overflow-y-auto bg-neutral-200">
      <Header url="/" text="Alamat Tersimpan"></Header>
      <div
        id="addAddress"
        className="w-full flex gap-x-3 p-6 items-center sticky bg-white mt-2  shadow-md"
      >
        <div className="text-xl rounded-full border-2 border-primary p-1 font-bold">
          <Link to="/address/addAddress">
            <FaPlus />
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/address/addAddress">Tambah Alamat</Link>
          <span className="text-xs font-light">
            Simpan alamat favorit yang ingin kamu simpan disini
          </span>
        </div>
      </div>

      <div
        id="savedAddress"
        className="p-6 flex gap-x-3 bg-white mt-2 shadow-md mx-4 rounded-xl"
      >
        <div>
          <FaHome className="text-primary text-2xl" />
        </div>
        <div className="flex flex-col ">
          <span className="font-bold">Perum Omah Alit Blok A</span>
          <div className="flex gap-x-2 items-center">
            <span className="text-xs font-light">fahmi</span>
            <span>-</span>
            <span className="text-xs font-light">08516843431</span>
          </div>
          <span className="text-xs font-light">
            Dekoro, Pekalongan Timur, Kota Pekalongan
          </span>
          <div className="mt-2">
            <textarea
              type="text"
              className=" bg-neutral-200 rounded-md w-full h-20 p-2 focus:outline-[#556052]  "
              placeholder="Masukan catatan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
