import { Icon } from "@iconify/react";
import logoBigger from "../assets/logoBigger.png";
import { useState } from "react";
import DropDown from "./dropDown";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  console.log(isDropdownOpen);

  return (
    <div className=" h-20 border shadow-lg shadow-slate-500/20 place-content-center grid ">
      <div className="flex">
        <img src={logoBigger} alt="logo" className=" h-11 w-32 mr-20 ml-3" />
        <div className="flex gap-5 ">
          <div className="flex" onClick={handleDropDown}>
            <button>Kategoriler</button>
            <Icon icon="gridicons:dropdown" className="self-center" />
            {isDropdownOpen && <DropDown />}
          </div>
          <button>Nasıl Çalışır?</button>
          <button className="mr-96 ">Usta Rehberi</button>
        </div>
        <button className="h-12 ml-40 w-40 rounded bg-[#f68761]">
          Talep Oluştur
        </button>
      </div>
    </div>
  );
}

export default Navbar;
