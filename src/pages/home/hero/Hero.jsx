import React from "react";
import Button from "../../../components/Button";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative w-full h-full pt-14">
        <figure
          className="container mx-auto h-full content-center bg-no-repeat bg-center px-2 md:px-[5%]"
          style={{
            backgroundImage: `url(${"https://res.cloudinary.com/dozupkvv3/image/upload/v1777318318/bg-lines_h4hkpj.svg"})`,
          }}
        >
          <h1 className="font-bold text-3xl text-center md:tracking-tighter md:text-5xl">
            Welcome to Your <br className="md:hidden" />
            <b className="h-fit border-transparent inline-block my-4 md:my-0 hover:-rotate-6 hover:p-3 hover:bg-(--primary)/20 hover:border hover:border-white hover:mr-1 hover:cursor-crosshair duration-150 ease-in-out">
              Study<span className="text-(--primary)">Buddy</span>
            </b>
            .
          </h1>
          <p className="md:w-1/2 my-5 text-center mx-auto leading-none opacity-60">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <Button name="Get Started" style="mx-auto" />
        </figure>
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="circle w-50 h-50 rounded-full bg-linear-to-r from-(--primary) to-white blur-[90px]"></div>
          <div className="absolute bottom-0 w-full h-120">
            <img
              src="https://res.cloudinary.com/dozupkvv3/image/upload/v1777351260/Group_1_e0p1kc.png"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
