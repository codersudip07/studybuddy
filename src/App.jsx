import React from 'react'
import "./App.css";
<<<<<<< HEAD
import Header from './components/Header';
import Hero from './pages/home/hero/Hero';
import Counter from './components/Counter';
import About from './pages/home/about/About';
import Notes from './pages/home/notes/Notes';
import PYQ from './pages/home/pyq/PYQ';
import Achiever from './pages/home/achiever/Achiever';
import FAQ from './pages/home/faq/FAQ';
=======
import Home from './pages/home/Home';
>>>>>>> 888709d0e409cd0b6ec07f5ffd817de2b0949b99

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <main className="w-full h-screen">
        <Hero />
        <Counter />
        <About />
        <Notes />
        <PYQ />
        <Achiever />
        <FAQ />
      </main>
=======
      <Home />
>>>>>>> 888709d0e409cd0b6ec07f5ffd817de2b0949b99
    </>
  );
}

export default App