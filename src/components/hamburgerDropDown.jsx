import { Icon } from "@iconify/react";

function HamburgerDropDown() {
  return (
    <div className="m-5">
      <div className="hover:bg-slate-100 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Mutfak Tıkanıklığı ve Tuvalet Açma </text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Kombi Bakım ve Tamiri</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Petek (Radyatör) Temizliği</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text> Doğal gaz Kaçak Tespiti</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Su Tesisatı Yenileme, Tamir, Bakım ve Onarımı</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Tuvalet Tıkanıklığı Açma</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Vitrifiye Montajı</text>
      </div>
      <div className="hover:bg-slate-100 mt-3 flex gap-3">
        <Icon icon="arcticons:nrf-toolbox" height="1.5rem" className="ml-3" />
        <text>Kanal Açma</text>
      </div>
    </div>
  );
}

export default HamburgerDropDown;
