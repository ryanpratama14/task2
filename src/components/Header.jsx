import React from "react";
import noise from "../assets/noise.png";

const descData = [
  {
    label: "ВИДЖЕТЫ",
    desc: (
      <>
        30 готовых
        <br />
        решений
      </>
    ),
  },
  {
    label: "DASHBOARD",
    desc: (
      <>
        с показателями
        <br />
        вашего бизнеса
      </>
    ),
  },
  {
    label: "SKYPE АУДИТ",
    desc: (
      <>
        отдела продаж
        <br />и CRM системы
      </>
    ),
  },
  {
    label: "35 ДНЕЙ",
    desc: (
      <>
        использования
        <br />
        CRM
      </>
    ),
  },
];

const descDataMobile = [
  {
    label: "SKYPE АУДИТ",
  },
  {
    label: "30 виджетов",
  },
  {
    label: "Dashboard",
  },
  {
    label: "Месяц аmoCRM",
  },
];

const Header = () => {
  return (
    <>
      {/* desktop */}
      <div className="pt-longer pb-shorter hidden lg:flex justify-between">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-1">
            <h1 className="text-6xl">
              Зарабатывай
              <br />
              больше
            </h1>
            <h1 className="font-black text-6xl gradient">с WELBEX</h1>
          </div>
          <label className="text-xl">
            Развиваем и контролируем
            <br />
            продажи за вас
          </label>
        </div>
        <div className="flex flex-col gap-9">
          <h4 className="font-medium text-2xl text-right">
            Вместе с <span className="gradient2 font-bold">БЕСПЛАТНОЙ</span>
            <br />
            <span className="gradient font-bold">КОНСУЛЬТАЦИЕЙ</span> мы дарим:
          </h4>
          <div className="grid grid-cols-2 text-right gap-6">
            {descData?.map((e, i) => {
              return (
                <div key={i} className="flex flex-col">
                  <h3 className="text-2xl font-medium">{e?.label}</h3>
                  <label>{e?.desc}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        style={{ backgroundImage: `url(${noise})` }}
        className="overflow-hidden lg:hidden bg-[#1E1E1E] relative flex flex-col gap-12 pt-longer3 pb-longer5 px-shorter"
      >
        {/* backgrounds */}
        <div className="top-0 absolute glass bg-white left-0 w-72 aspect-square" />
        <div className="-right-32 top-[20%] bg-[#833AB4] blur-[150px]  absolute w-56 aspect-square rounded-full" />
        <div className="bottom-0 left-0 w-32 blur-[150px] aspect-square bg-[#961A1A] absolute" />
        {/* magic balls */}
        <div className="bottom-1 blur-[5px] left-6 w-12 aspect-square absolute rounded-full red-ball-mobile backdrop-blur-[2px]" />
        <div className="bottom-[30%] -right-6 backdrop-blur-[2px] blur-[5px] w-12 aspect-square absolute rounded-full purple-ball-mobile" />
        {/* main content mobile */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl">
              Зарабатывай
              <br />
              больше
            </h1>
            <h1 className="font-black text-4xl gradient">с WELBEX</h1>
          </div>
          <label className="text-xl">
            Развиваем и контролируем
            <br />
            продажи за вас
          </label>
        </div>
        <div className="flex flex-col gap-9">
          <h4 className="font-medium text-2xl">
            Вместе с <span className="gradient font-bold">бесплатной</span>
            <br />
            <span className="gradient font-bold">консультацией</span> мы дарим:
          </h4>
          <div className="grid grid-cols-2 gap-y-4 uppercase">
            {descDataMobile?.map((e, i) => {
              return (
                <div className="flex items-center gap-2">
                  <div className="bgGradient2 w-4 h-[1px]" />
                  <label>{e?.label}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
