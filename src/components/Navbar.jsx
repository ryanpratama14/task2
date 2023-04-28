import React from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden lg:flex justify-between">
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <img src={logo} className="w-14 object-contain" />
              <img src={logo2} className="w-[7rem] object-contain" />
            </div>
            <label className="font-light text-[0.8rem]">
              крупный интегратор CRM
              <br />
              в Росcии и ещё 8 странах
            </label>
          </div>
          <ul className="flex gap-9 mt-2 font-medium">
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
          </ul>
        </div>
        <div className="flex gap-12 mt-2">
          <p>+7 555 555-55-55</p>
          <div className="flex gap-9">
            <Icon icon="bxl:telegram" width={22} />
            <Icon icon="ic:baseline-phone-in-talk" width={22} />
            <Icon icon="ic:baseline-whatsapp" width={22} />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden bg-black py-normal">
        <ul className="flex justify-evenly w-full uppercase">
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
