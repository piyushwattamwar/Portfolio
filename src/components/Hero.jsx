// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/img/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-transform duration-500 hover:scale-105 animate-slide-in-down">
          Hello, <span className="text-crimson">I'm</span>
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 hover:text-crimson animate-slide-in-up delay-100">
          Piyush <span className="text-crimson">Wattamwar</span>
        </h1>
        <a
          href="#projects"
          className="inline-block mt-6 px-8 py-3 border-2 border-crimson text-white hover:bg-red-700  rounded-xl"
        >
          Portfolio
        </a>
      </div>
    </section>
  );
};

export default Hero;
