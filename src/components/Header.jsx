import React from "react";
import { useState } from "react";
import Button from "./Button";
import { Bs0Circle } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    { name: "Home", path: "" },
    { name: "About", path: "" },
    { name: "Latest Notes", path: "" },
    { name: "PYQ", path: "" },
  ];
  return (
    <header className="fixed w-full h-14 px-4 md:px-[5%] z-90 blur-bg">
      <nav className="container mx-auto h-full flex items-center justify-between">
        <h1 className="font-black text-xl">
          Study<span className="text-(--primary)">Buddy</span>
        </h1>
        <ul className="hidden items-center gap-4 font-semibold md:flex">
          {navMenu.map((item, index) => (
            <li
              key={index}
              className="bg-clip-text hover:bg-linear-to-t hover:from-(--primary) hover:to-white  hover:text-transparent hover:cursor-pointer duration-200 ease-in"
            >
              {item.name}
            </li>
          ))}
          <Button name="Sign Up" />
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-4 relative cursor-pointer md:hidden"
        >
          <span
            className={`absolute left-0 w-full h-0.5 bg-white rounded-2xl transition-all duration-300 
        ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
          ></span>
          <span
            className={`absolute left-0 w-full h-0.5 bg-white rounded-2xl transition-all duration-300 
        ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}
          ></span>
          <span
            className={`absolute left-0 w-full h-0.5 bg-white rounded-2xl transition-all duration-300 
        ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
          ></span>
        </div>
        <aside className={`fixed top-0 w-full h-screen content-center bg-black duration-100 ease-in-out -z-10 ${open ? 'left-0' : 'left-full'}`}>
          <ul className="flex flex-col items-center gap-4 font-semibold">
            {navMenu.map((item, index) => (
              <li
                key={index}
                className="bg-clip-text hover:bg-linear-to-t hover:from-(--primary) hover:to-white  hover:text-transparent hover:cursor-pointer duration-200 ease-in"
              >
                {item.name}
              </li>
            ))}
            <Button name="Sign Up" />
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Header;
