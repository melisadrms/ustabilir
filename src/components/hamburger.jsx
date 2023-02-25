import { Icon } from "@iconify/react";
import logoBigger from "../assets/logoBigger.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HamburgerDropDown from "./hamburgerDropDown";

function Hamburger() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let navigate = useNavigate();

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="m-6 max-xl:block">
      <div className="flex">
        <img src={logoBigger} alt="logo" className="w-24" />
        <Icon
          icon="mdi:window-close"
          height="2rem"
          className="ml-auto"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex mt-10" onClick={handleDropDown}>
        <text className="font-bold text-xl text-[#494e5a]">Kategoriler</text>
        <Icon
          icon="gridicons:dropdown"
          height="2rem"
          className="self-center ml-auto"
        />
      </div>
      {isDropdownOpen && <HamburgerDropDown />}
      <hr className="mt-3" />
      <div className="mt-3">
        <text className="font-bold text-xl mt-3 text-[#494e5a]">
          Nasıl Çalışır?
        </text>
      </div>
      <hr className="mt-3" />
      <div className="mt-3">
        <text className="font-bold text-xl mt-3 text-[#494e5a]">
          Usta Rehberi
        </text>
      </div>
      <hr className="mt-3" />
    </div>
  );
}
export default Hamburger;
