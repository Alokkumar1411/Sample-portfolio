import React, { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        scale:0.95, // thoda kam (smooth feel)
        duration: 0.8, // ⚡ faster
        ease: "power2.out",
        stagger: 0.15, // ⚡ optimized
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 85%",
          toggleActions: "restart none restart none", // 🔁 repeat on scroll
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-28 lg:mt-10" id="projects" ref={projectsRef}>
      <div className="flex flex-col w-full justify-center items-center">

        <h2 className="mb-10 text-center text-3xl rounded-full px-5 py-1 font-medium border lg:text-4xl">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((pjt, index) => (
            <div
              key={pjt.id}
              className="project-card will-change-transform flex flex-col w-full p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="grow overflow-hidden rounded-lg border p-2 border-gray-600 hover:shadow-lg hover:shadow-black/20 transition-all duration-300">
                
                <a href={pjt.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={pjt.webp}
                    alt={pjt.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width="500"
                    height="300"
                    className="h-60 w-full rounded-lg object-cover"
                  />
                </a>

                <div className="p-6">
                  <h3 className="mb-3 text-lg font-medium lg:text-2xl">
                    {pjt.title}
                  </h3>

                  <p className="mb-4 text-gray-400">
                    {pjt.description}
                  </p>

                  <div className="mb-4">
                    <strong className="block mb-2">Tech Stack</strong>
                    <ul className="flex flex-wrap gap-2">
                      {pjt.technologies?.map((tech, i) => (
                        <li
                          key={i}
                          className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;