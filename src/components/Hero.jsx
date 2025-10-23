import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[88vh] sm:h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/30 to-gray-950/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="pointer-events-none select-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-900/60 px-3 py-1 text-xs text-gray-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Tech • Portfolio • Interactive • Modern</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            appuzlota
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Developer & Aspiring Entrepreneur</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Student & future-focused entrepreneur exploring the intersections of AI, new tech, and science. An introvert who finds clarity in code and complexity. Building something that matters.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow ring-1 ring-inset ring-white/10 transition">
              <Rocket className="h-4 w-4" />
              Connect
            </a>
            <a href="#about" className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm font-medium shadow ring-1 ring-inset ring-white/10 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
