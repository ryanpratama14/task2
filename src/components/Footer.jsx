import { Icon } from "@iconify/react";
import React from "react";

const menuData = [
  {
    label: "Расчёт стоимости",
  },

  {
    label: "Услуги",
  },

  {
    label: "Виджеты",
  },

  {
    label: "Интеграции",
  },

  {
    label: "Наши клиенты",
  },
];

const menuData2 = [
  {
    label: "Кейсы",
  },
  {
    label: "Благодарственные письма",
  },
  {
    label: "Сертификаты",
  },
  {
    label: "Блог на YouTube",
  },
  {
    label: "Вопрос / Ответ",
  },
];

const Footer = () => {
  return (
    <footer className="max-md:py-longer3 max-lg:py-normal max-lg:px-shorter pt-normal bg-black lg:bg-transparent">
      <div className="flex justify-between max-sm:gap-6 lg:flex-nowrap flex-wrap">
        <div className="flex gap-6 lg:gap-24 lg:flex-nowrap flex-wrap">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-footer">О КОМПАНИИ</h4>
            <ul className="flex flex-col gap-1">
              <li>Партнёрская программа</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-footer">МЕНЮ</h4>
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-1">
                {menuData?.map((e, i) => {
                  return <li key={i}>{e?.label}</li>;
                })}
              </ul>
              <ul className="flex flex-col gap-1">
                {menuData2?.map((e, i) => {
                  return <li key={i}>{e?.label}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:text-right">
          <h4 className="font-bold text-footer">КОНТАКТЫ</h4>
          <ul className="flex flex-col gap-4">
            <li>+7 555 555-55-55</li>
            <li className="flex lg:justify-end gap-2 lg:text-lg">
              <Icon icon="bxl:telegram" />
              <Icon icon="ic:baseline-phone-in-talk" />
              <Icon icon="ic:baseline-whatsapp" />
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
      </div>
      <div className="flex lg:items-end flex-col max-sm:mt-12 py-shorter3 text-sm lg:text-xs">
        <label>©WELBEX 2022. Все права защищены.</label>
        <label className="underline">Политика конфиденциальности</label>
      </div>
    </footer>
  );
};

export default Footer;
