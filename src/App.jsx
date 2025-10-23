import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased">
      <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">appuzlota<span className="text-indigo-400">.me</span></a>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} appuzlota. All rights reserved.</p>
          <p>Built with React, Tailwind, and Spline.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
