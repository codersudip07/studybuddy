import React from "react";
import Button from "./Button";
import { Bs0Circle } from "react-icons/bs";

const Header = () => {
  const navMenu = [
    {name: 'Home', path: ''},
    {name: 'About', path: ''},
    {name: 'Latest Notes', path: ''},
    {name: 'PYQ', path: ''}
  ]
  return (
    <header className="fixed w-full h-14 px-2 md:px-[5%] z-90 navber">
      <nav className="container mx-auto h-full flex items-center justify-between">
        <h1 className="font-black text-xl">
          Study<span className="text-(--primary)">Buddy</span>
        </h1>
        <ul className="flex items-center gap-4 font-semibold">
          {navMenu.map((item, index) => (
            <li key={index} className="bg-clip-text hover:bg-linear-to-t hover:from-(--primary) hover:to-white  hover:text-transparent hover:cursor-pointer duration-200 ease-in">
              {item.name}
            </li>
          ))}
          <Button name="Sign Up" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
