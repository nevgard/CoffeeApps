import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const registerPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9001/users", {
        fullName,
        email,
        password,
        confirmPassword,
        birthDate,
        phoneNumber,
      });
      navigate("/login");
      alert("User added successfully");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.error);
      }
    }
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl ">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-primary ">
            Create an account{" "}
          </h1>
        </div>
        <span>{msg}</span>
        <div className="mt-12">
          <form
            action=""
            onSubmit={registerPost}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-2">
              <label>Full Name</label>
              <input
                type="text"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                placeholder="John Doe"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>E-mail</label>
              <input
                type="email"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                placeholder="jackseparo@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Password</label>
              <input
                type="password"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Confirm Password</label>
              <input
                type="password"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Birth Date</label>
              <input
                type="date"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Phone Number</label>
              <input
                type="text"
                className="p-4 bg-primary bg-opacity-20 rounded-xl"
                placeholder="08563245237"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <button
              type="submit"
              className="mt-3 bg-primary text-white rounded-full p-4"
            >
              {" "}
              Daftar{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
