import { Icon } from "@iconify/react";
import bg from "../assets/bg.png";
import usta from "../assets/usta.png";
function Category() {
  return (
    <div className="flex-column mt-20">
      <img
        src={bg}
        alt="background"
        className="max-w-4xl absolute right-0 z-0 max-md:max-w-lg"
      />
      <img
        src={usta}
        alt="usta"
        className="absolute z-10 left-0 ml-40 max-md:hidden"
      />
      <div className="mt-24 absolute z-20 ml-44 max-md:ml-5 ">
        <h1 className="text-5xl font-bold">
          Ustabilir ile
          <br />
          Usta Bulmak Çok Kolay
        </h1>
        <p className="text-lg mt-4">
          Deneyimli ustalar size özel hizmet sunmaya hazır!
        </p>
        <div className="flex mt-8 ">
          <input
            type="text"
            className="w-full h-16 shadow-lg shadow-slate-500/20 rounded-lg pl-12 placeholder:font-bold placeholder:text-gray-400 pr-40 "
            placeholder="Kategori Ara"
          />
          <Icon
            icon="ic:round-search"
            height="2rem"
            className="absolute self-center ml-2"
          />
          <button className="absolute self-center right-0 bg-[#2f3640] text-white w-32 h-12 rounded mr-3">
            Talep Oluştur
          </button>
        </div>
      </div>
    </div>
  );
}
export default Category;

{
  /* <div className="flex ml-40 z-20 ">
<input
  type="text"
  className=" max-md:ml-10 absolute mt-72 w-5/12 h-20 shadow-lg shadow-slate-500/20 rounded-lg "
/>
<Icon
  icon="ic:round-search"
  height="2rem"
  className="absolute self-center"
/>
</div> */
}

// <h1 className="text-5xl font-bold ml-40 max-md:ml-10 z-20 absolute text-[2f3640] mt-24 max-md:text-4xl">
// Ustabilir ile
// <br />
// Usta Bulmak Çok Kolay
// </h1>
// <p className="text-lg ml-40 max-md:ml-10 z-20 absolute text-[2f3640] mt-52">
// Deneyimli ustalar size özel hizmet sunmaya hazır!
// </p>
