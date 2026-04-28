import React from 'react'
import "./App.css";
import Header from './components/Header';
import Hero from './pages/home/hero/Hero';
import Counter from './components/Counter';
import About from './pages/home/about/About';

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen">
        <Hero />
        <Counter />
        <About />
      </main>
    </>
  );
}

export default App