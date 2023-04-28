import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="lg:bg-[#1E1E1E] lg:px-longer2 lg:pt-shorter relative z-10">
      {/* backgrounds */}
      <div className="hidden lg:block blur-[196px] -z-10 absolute -left-24 top-96 w-64 rounded-full aspect-square bg-[#961A1A]" />
      <div className="hidden lg:block blur-[196px] -z-10 absolute left-[50%] -translate-x-[50%] -translate-y-[50%] top-0 w-64 rounded-full aspect-square bg-[#833AB4]" />
      {/* magic balls */}
      <div className="hidden lg:block absolute backdrop-blur-[2px] left-[40%] -translate-x-[50%] -translate-y-[50%] top-40 w-[7rem] aspect-square red-ball rounded-full" />
      <div className="hidden lg:block absolute backdrop-blur-[2px] blur-[5px] left-[60%] -translate-x-[50%] top-0 w-[4rem] aspect-square purple-ball rounded-full" />
      <Navbar />
      <Header />
      <Button />
      <Footer />
    </main>
  );
};

export default App;
