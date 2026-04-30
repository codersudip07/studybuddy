import React, { useEffect, useRef, useState } from "react";

const data = [
  { title: "available notes", count: 500 },
  { title: "active students", count: 50 },
  { title: "registered students", count: 999 },
];

function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1500; 

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, start]);

  return value;
}

const Counter = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="counter"
      ref={ref}
      className="w-full h-50 content-center px-2 md:px-[5%]"
    >
      <figure className="container mx-auto flex items-center justify-center flex-wrap gap-4 md:gap-0">
        {data.map((item, index) => {
          const value = useCountUp(item.count, start);

          return (
            <div key={index} className="text-center md:w-1/4">
              <h3 className="md:text-6xl text-3xl font-bold bg-linear-to-t from-(--primary) to-white bg-clip-text text-transparent">
                {value}+
              </h3>
              <p className="capitalize">{item.title}</p>
            </div>
          );
        })}
      </figure>
    </section>
  );
};

export default Counter;