import React from 'react'
import "./App.css";
import Header from './components/Header';
import Hero from './pages/home/hero/Hero';
import Counter from './components/Counter';
import About from './pages/home/about/About';
import Notes from './pages/home/latest-notes/Notes';
import PYQ from './pages/home/pyq/PYQ';

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
      </main>
    </>
  );
}

export default App