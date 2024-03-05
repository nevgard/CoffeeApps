import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiHandWaving } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  console.log(isOpen);
  return (
    <>
      <nav
        className={`fixed inset-y-0 left-0 z-50 w-3/4 bg-white transition duration-300 ease-in-out transform shadow-lg   ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-auto md:bg-white md:shadow-none`}
      >
        <div className="flex items-center justify-end ">
          <button className="text-3xl p-3 " onClick={toggleSideBar}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="px-6">
          <h1 className="text-3xl font-bold text-center mt-3 font-mono ">
            NGOPIR
          </h1>
        </div>
        <div className="mt-6 px-6">
          <div className=" text-sm bg-gray-50  rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="flex items-center p-4 gap-x-3 ">
              <div>
                <p>Dapatkan hadiah voucher diskon 50%</p>
              </div>
              <div className="bg-primary text-white p-2 rounded-full">
                <PiHandWaving className="text-3xl" />
              </div>
            </div>
            <div className="text-xs text-white  bg-primary rounded-2xl p-3 ">
              Undang teman mu menggunakan aplikasi Jiwat untuk mendapatkan
              hadiah voucher tambahan 50 %
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-y-3 relative m-0 list-none p-0 text-xl mt-6 px-6 ">
          <Link to={"/order"}>
            <li className="flex gap-x-3 items-center py-3 px-4">
              <div className="rounded-full bg-primary p-2 text-white">
                <MdOutlineEventNote />
              </div>

              <span>Pesanan</span>
            </li>
          </Link>
          <li className="flex gap-x-3 items-center py-3 px-4">
            <div className="rounded-full bg-primary p-2 text-white">
              <RiHandHeartLine />
            </div>

            <span>Loyalty Membership</span>
          </li>
          <Link to="/address">
            <li className="flex gap-x-3 items-center py-3 px-4">
              <div className="rounded-full bg-primary p-2 text-white">
                <IoLocationOutline />
              </div>
              <span>Alamat Tersimpan</span>
            </li>
          </Link>

          <li className="flex gap-x-3 items-center py-3 px-4">
            <div className="rounded-full bg-primary p-2 text-white">
              <BiSolidDiscount />
            </div>
            <span>Voucher</span>
          </li>
        </ul>
        <footer>
          <div className="fixed bottom-0 px-6 items-center justify-center border-t-2 w-full ">
            <div className="flex justify-between text-lg text-slate-500 py-6">
              <div>Hi! Fahmi</div>
              <Link to="/profile" className="flex gap-x-3 items-center">
                Profile
                <div className="rounded-full bg-primary p-2 text-white">
                  <CgProfile />
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </nav>
    </>
  );
};

export default Sidebar;
