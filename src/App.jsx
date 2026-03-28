import React, { useEffect } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import Nav from "./componentd/Nav";
import Hero from "./componentd/Hero";
import Projects from "./componentd/Projects";
import Skill from "./componentd/Skill";
import Experience from "./componentd/Experience";
import Education from "./componentd/Education";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // 🔥 important
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Projects />
        <Skill />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default App;