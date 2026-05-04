import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
import Testimonials from "../../components/Testimonials";

const Hero = lazy(() => import("./hero/Hero"));
const Counter = lazy(() => import("../../components/Counter"));
const About = lazy(() => import("./about/About"));
const Notes = lazy(() => import("./notes/Notes"));
const PYQ = lazy(() => import("./pyq/PYQ"));
const Achiever = lazy(() => import("./achiever/Achiever"));
const FAQ = lazy(() => import("./faq/FAQ"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main className="w-full h-full">
          <Hero />
          <Counter />
          <About />
          <Notes />
          <PYQ />
          <Achiever />
          <FAQ />
          <Testimonials />
        </main>
      </Suspense>
    </>
  );
};

export default Home;
