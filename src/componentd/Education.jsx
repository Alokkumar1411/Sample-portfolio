import React, { useRef } from 'react'
import { EDUCATION } from '../constants'
import { EXPERIENCES } from "../constants";
import { SKILLS } from '../constants'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Education = () => {
      const Expref = useRef(null);
  useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".Edu-item", {
            opacity: 0,
            y: 70,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: eduref.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
              
            },
          });
        }, eduref); // 🔥 scope fix
    
        return () => ctx.revert();
      }, []);

    const eduref=useRef(null)
  return (
    <section className='py-16' id='education' ref={eduref}>
        <div className='mx-auto max-w-full px-4'>
            <h2 className='mb-8 text-center font-medium text-3xl lg:text-4xl'>Education</h2>
            <div className='flex flex-col space-y-8'>
                {EDUCATION.map((edu)=>(
                    <div key={edu.id} className='rounded backdrop-blur-sm Edu-item border border-gray-400 p-6' >
                        <h3 className='mb-2 text-lg  lg:text-2xl'>{edu.degree}</h3>
                        <h4 className='text-lg lg:text-xl font-medium' >{edu.institution}</h4>
                        <p className='text-sm lg:text-base'>{edu.duration}</p>
                        <p className='mt-4'>{edu.description}</p>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Education
