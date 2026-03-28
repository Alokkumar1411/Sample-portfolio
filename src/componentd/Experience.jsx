import React, { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { SKILLS } from '../constants'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const Expref = useRef(null);
  useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".Experience-item", {
            opacity: 0,
            y: 70,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: Expref.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
              
            },
          });
        }, Expref); // 🔥 scope fix
    
        return () => ctx.revert();
      }, []);



  return (
    <section className="py-16" id="exp" ref={Expref}>
      <div className=" mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-medium text-3xl lg:text-4xl">
          Experience
        </h2>
        <div className="flex mt-16 flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index}  className="flex Experience-item flex-col lg:flex-row items-start justify-between md:flex-row">
              <div className="w-full  text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-lg lg:text-2xl">{exp.role}-{" "}
                    <span className="bg-linear-to-b from-gray-200 to-gray-700 bg-clip-text  text-2xl text-transparent tracking-tighter">{exp.company}</span>
                </h3>
                <p  className="mb-4 text-sm lg:text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
