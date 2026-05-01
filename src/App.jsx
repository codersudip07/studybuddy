import React from 'react'
import "./App.css";
import Header from './components/Header';
import Hero from './pages/home/hero/Hero';
import Counter from './components/Counter';
import About from './pages/home/about/About';
import Notes from './pages/home/notes/Notes';
import PYQ from './pages/home/pyq/PYQ';
import Achiever from './pages/home/achiever/Achiever';

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen">
        <Hero />
        <Counter />
        <About />
        <Notes />
        <PYQ />
        <Achiever />
      </main>
    </>
  );
}

export default App