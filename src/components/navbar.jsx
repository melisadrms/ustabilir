import { Icon } from "@iconify/react";
import logoBigger from "../assets/logoBigger.png";
import logoSmaller from "../assets/logoSmaller.png";
import { useState } from "react";
import DropDown from "./dropDown";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate(path);
  };

  return (
    <div className=" h-20 border shadow-lg shadow-slate-500/20 ">
      <div className="flex md:justify-evenly mt-3">
        <div className="flex">
          <Icon
            icon="icon-park:hamburger-button"
            height="1.5rem"
            className="mt-3 block md:hidden mr-5"
            onClick={routeChange}
          />
          <img
            src={logoBigger}
            alt="logo"
            className="hidden md:block h-11 w-32 mr-10 "
          />
          <img src={logoSmaller} alt="logoSmall" className="block md:hidden" />
          <div className=" hidden md:flex gap-5">
            <div className="flex" onClick={handleDropDown}>
              <button>Kategoriler</button>
              <Icon icon="gridicons:dropdown" className="self-center" />
              {isDropdownOpen && <DropDown />}
            </div>
            <button>Nasıl Çalışır?</button>
            <button>Usta Rehberi</button>
          </div>
        </div>
        <button className="h-12 w-40 rounded bg-[#f68761] max-md:ml-auto">
          Talep Oluştur
        </button>
      </div>
    </div>
  );
}

export default Navbar;
