import Header from "../molecul/Header";
import { FaHome } from "react-icons/fa";

export default function AddAddress() {
  return (
    <div className="w-full h-screen overflow-y-auto ">
      <Header url="/address" text="Add Address"></Header>
      <div id="form" className="p-12 ">
        <form action="">
          <div className="flex flex-col w-full">
            <label className="text-sm mb-2 font-bold "> Detail Alamat</label>
            <textarea
              type="text"
              id="alamat"
              name="alamat"
              className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] 
              "
              placeholder="Detail Alamat"
            />
            <label className="mt-1 text-xs text-slate-400 ">
              {" "}
              Contoh : Jl. Raya Pekalongan Nomer 12
            </label>
          </div>

          <div className="mt-6 flex flex-col w-full">
            <label className="text-sm mb-2 font-bold"> Kecamatan</label>
            <input
              type="text"
              id="kecamatan"
              name="kecamatan"
              className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
              placeholder="Kecamatan"
            />
          </div>

          <div className="mt-6 flex flex-col w-full">
            <label className="text-sm mb-2 font-bold"> Kelurahan</label>
            <input
              type="text"
              id="kelurahan"
              name="kelurahan"
              className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
              placeholder="Kelurahan"
            />
          </div>
          <div className="mt-6 flex flex-col w-full">
            <label className="text-sm mb-2 font-bold"> Nama Penerima</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
              placeholder="Nama Penerima"
            />
          </div>
          <div className="mt-6 flex flex-col w-full">
            <label className="text-sm mb-2 font-bold"> Nomor Telepon</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
              placeholder="Nomor Telepon"
            />
          </div>
          <div className="mt-6 flex justify-center bg-primary p-4 text-white rounded-xl w-full">
            <button>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
