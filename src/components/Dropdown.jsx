import { useState, useRef, useEffect } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Dropdown({ options, preset, onSelect, style, outerStyle }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(preset);
  const ref = useRef();

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
    if (onSelect) onSelect(item);
  };


  // 👇 outside click close
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    setSelected(preset);
  }, [preset]);

  return (
    <div ref={ref} className={`relative md:w-40 ${outerStyle}`}>
      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className="border-l-4 border-(--primary) w-full p-2 md:px-4 text-sm md:text-xl font-bold cursor-pointer flex justify-between items-center gap-2 md:gap-0 bg-white/5 backdrop-blur-md rounded-md"
      >
        {selected}
        <span
          className={`transition-transform duration-300  ${open ? "rotate-180" : ""
            }`}
        >
          <RxDoubleArrowDown className="md:text-lg" />
        </span>
      </div>

      {/* Dropdown List */}
      <div
        className={`absolute w-full bg-white/5 backdrop-blur-md rounded-md  shadow-lg border border-white/10 transition-all duration-300 ${style} ${open ? "max-h-fit opacity-100" : "max-h-0 opacity-0 hidden"
          }`}
      >
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className="px-6 py-2 md:px-2 hover:bg-(--primary) hover:text-white cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
