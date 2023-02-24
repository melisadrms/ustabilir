function DropDown() {
  return (
    <div className="absolute border top-20 w-7/12 h-96 bg-white grid place-content-center shadow-lg shadow-slate-500/20 flex-col gap-4 max-md:hidden md:max-xl:w-max">
      <div className="flex">
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 font-bold md:max-xl:w-40 md:max-xl:h-20 md:max-xl:mt-1">
            Mutfak Tıkanıklığı ve Tuvalet Açma
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40 " />
        </div>
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 font-bold md:max-xl:w-40 md:max-xl:mt-5">
            Kombi Bakım ve Tamiri
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40 md:max-xl:mt-6 md:max-xl:mr-8" />
        </div>
      </div>
      <div className="flex">
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold md:max-xl:w-40">
            Petek (Radyatör) Temizliği
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40 md:max-xl:mt-5" />
        </div>
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold md:max-xl:w-40">
            Doğal Gaz Kaçak Tespiti
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40 md:max-xl:mt-5" />
        </div>
      </div>
      <div className="flex">
        <div className="md:max-xl:h-20">
          <button className="h-15 w-80 text-left ml-10 mt-5 font-bold md:max-xl:w-40">
            Su Tesisatı Yenileme, Tamir, Bakım ve Onarımı
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40" />
        </div>
        <div className="md:max-xl:h-20">
          <button className="h-15 w-80 text-left ml-10 mt-8 font-bold md:max-xl:w-40">
            Tuvalet Tıkanıklığı Açma
          </button>
          <hr className="ml-10 w-80 mt-3 md:max-xl:w-40" />
        </div>
      </div>
      <div className="flex">
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold md:max-xl:w-40">
            Vitrifiye Montajı
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40" />
        </div>
        <div className="md:max-xl:h-20">
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold md:max-xl:w-40">
            Kanal Açma
          </button>
          <hr className="ml-10 w-80 md:max-xl:w-40" />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
