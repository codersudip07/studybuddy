import React from 'react'

const Counter = () => {
    const counter = [
        {title: 'availabe notes', count: 500},
        {title: 'active students', count: 50},
        {title: 'registered students', count: 999},
    ]
  return (
    <>
      <section id="counter" className="w-full h-50 content-center px-2 md:px-[5%]">
        <figure className="container mx-auto flex items-center justify-center">
          {counter.map((item, index) => (
            <div key={index} className="text-center w-1/4">
              <h3 className="md:text-6xl font-bold bg-clip-text bg-linear-to-t from-(--primary) to-white text-transparent">
                {item.count}+
              </h3>
              <p className="capitalize">{item.title}</p>
            </div>
          ))}
        </figure>
      </section>
    </>
  );
}

export default Counter