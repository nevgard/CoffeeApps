import { useState } from "react";

import "./App.css";
import Homepage from "./components/pages/Homepage";
import Sidebar from "./components/molecul/Sidebar";
import DetailProducts from "./components/pages/DetailProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./components/pages/Address";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
