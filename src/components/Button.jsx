import React from "react";

const Button = () => {
  return (
    <div className="hidden lg:flex justify-end">
      <div className="flex justify-center items-center">
        <div className="backdrop-blur-[2px] -translate-x-44 blur-[2.5px] w-[2rem] aspect-square red-small-ball rounded-full" />
      </div>
      <button className="py-5 px-9 bg-[#4077F3]">Получить консультацию</button>
    </div>
  );
};

export default Button;
