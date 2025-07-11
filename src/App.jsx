import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="space-y-12">
      <Header />
      <Hero />
      <section data-aos="fade-right">
        <Skills />
      </section>
      <section data-aos="fade-up">
        <Projects />
      </section>
      <section data-aos="zoom-in">
        <About />
      </section>
      <section data-aos="fade-up">
        <Certifications />
      </section>
      <section data-aos="fade-left">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;
