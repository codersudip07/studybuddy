import React from "react";

const Button = ({onclick, style, name, icon}) => {
  return (
    <>
      <button onClick={onclick} className={`relative flex items-center gap-1 py-1 px-4 font-semibold bg-(--primary) border border-white rounded-lg overflow-hidden hover:after:left-40 hover:cursor-pointer after:absolute after:w-3 after:h-20 after:top-1/2 after:-translate-y-1/2 after:bg-white after:blur-sm after:-left-10 after:rotate-45 after:duration-250 after:ease-in ${style}`}>
        {name} {icon}
      </button>
    </>
  );
};

export default Button;
