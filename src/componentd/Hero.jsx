import React, { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import david from "../assets/David.webp";
import gsap from "gsap";

const Hero = () => {
  const heroref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.5 }, // ⚡ lighter
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -40,
        delay:0.5,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 40,
          },
          "-=0.3"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 20,
          },
          "-=0.2"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            scale: 0.95, // only scale, no x (lighter)
          },
          "<"
        );
    }, heroref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroref}
      className="flex flex-col lg:flex-row items-center lg:items-start min-h-screen pt-20 lg:pt-40 w-full gap-30 justify-center"
    >
      <div className="mt-6 pl-5 flex flex-col items-center lg:mt-10">
        <h1 className="hero-title will-change-transform text-4xl text-gray-300 uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>

        <h2 className="hero-subheading will-change-transform mt-4 bg-linear-to-b from-gray-200 to-gray-700 bg-clip-text text-2xl text-transparent tracking-tighter">
          {PROFILE.role}
        </h2>

        <p className="hero-text will-change-transform max-w-2xl mt-10 text-xl tracking-tight text-center text-gray-300 lg:text-2xl">
          {PROFILE.subheading}
        </p>
      </div>

      <div className="hero-img will-change-transform flex justify-center border border-gray-400 p-2 rounded-full mr-5 lg:justify-end">
        <img
          src={david}
          alt={PROFILE.name}
          loading="eager"
          decoding="async"
          className="rounded-full w-56 lg:w-80"
        />
      </div>
    </div>
  );
};

export default Hero;