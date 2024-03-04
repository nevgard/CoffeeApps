import { useState } from "react";

import "./App.css";
import Homepage from "./components/pages/Homepage";
import Sidebar from "./components/molecul/Sidebar";
import DetailProducts from "./components/pages/DetailProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./components/pages/Address";
import AddAddress from "./components/pages/AddAddress";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage toggleSideBar={handleToggleSidebar} />
                <Sidebar isOpen={isOpen} toggleSideBar={handleToggleSidebar} />
              </>
            }
          />
          <Route path="/productDetials/:id" element={<DetailProducts />} />
          <Route path="/address" element={<Address />} />
          <Route path="/address/addAddress" element={<AddAddress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/editProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
