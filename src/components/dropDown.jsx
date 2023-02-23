function DropDown() {
  return (
    <div className="absolute border top-20 w-7/12 h-2/4 bg-white grid place-content-center shadow-lg shadow-slate-500/20 flex-col gap-4">
      <div className="flex">
        <div>
          <button className="h-10 w-80 text-left ml-10 font-bold">
            Mutfak Tıkanıklığı ve Tuvalet Açma
          </button>
          <hr className="ml-10 w-80" />
        </div>
        <div>
          <button className="h-10 w-80 text-left ml-10 font-bold ">
            Kombi Bakım ve Tamiri
          </button>
          <hr className="ml-10 w-80" />
        </div>
      </div>
      <div className="flex">
        <div>
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold">
            Petek (Radyatör) Temizliği
          </button>
          <hr className="ml-10 w-80" />
        </div>
        <div>
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold">
            Doğal Gaz Kaçak Tespiti
          </button>
          <hr className="ml-10 w-80" />
        </div>
      </div>
      <div className="flex">
        <div>
          <button className="h-15 w-80 text-left ml-10 mt-5 font-bold">
            Su Tesisatı Yenileme, Tamir, Bakım ve Onarımı
          </button>
          <hr className="ml-10 w-80" />
        </div>
        <div>
          <button className="h-15 w-80 text-left ml-10 mt-8 font-bold">
            Tuvalet Tıkanıklığı Açma
          </button>
          <hr className="ml-10 w-80 mt-3" />
        </div>
      </div>
      <div className="flex">
        <div>
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold">
            Vitrifiye Montajı
          </button>
          <hr className="ml-10 w-80" />
        </div>
        <div>
          <button className="h-10 w-80 text-left ml-10 mt-5 font-bold">
            Kanal Açma
          </button>
          <hr className="ml-10 w-80" />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
