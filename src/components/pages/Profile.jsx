import { Link } from "react-router-dom";
import Header from "../molecul/Header";

export default function Profile() {
  return (
    <div className="w-full h-screen overflow-y-auto ">
      <Header url="/" text="Profile"></Header>
      <div className="flex flex-col gap-y-4 p-4 ">
        <div className="flex text-sm  flex-col">
          <div className="font-bold">Nama Kamu</div>
          <div>Fahmi</div>
        </div>
        <div className="flex text-sm  flex-col">
          <div className="font-bold">Jenis Kelamin</div>
          <div>Laki Laki</div>
        </div>
        <div className="flex text-sm  flex-col">
          <div className="font-bold">Tanggal Lahir</div>
          <div>05/01/2001</div>
        </div>
        <div className="flex text-sm  flex-col">
          <div className="font-bold">Email Address</div>
          <div>fahmifaza6@gmail.com</div>
        </div>
        <div className="flex text-sm  flex-col">
          <div className="font-bold">Nomor Ponsel</div>
          <div>08564684674</div>
        </div>
        <div className="w-full flex justify-center items-center text-center">
          <Link
            to="/profile/editProfile"
            className="text-white bg-primary rounded-full p-2 w-full"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
