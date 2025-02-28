import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="w-4/5 flex justify-center">
        <div className="w-2/3 flex flex-col justify-center items-center mt-10">
          <img className="h-16 w-16" src={logo} alt="" />
          <h2 className="text-5xl uppercase font-bold text-stone-300 mt-2 tracking-widest">
            PlacePicker
          </h2>
          <p className="text-center mt-2 text-stone-200">
            Create your personal collection of places you would like to visit or
            you have visited.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
