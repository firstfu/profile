// import React from "react";

import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
