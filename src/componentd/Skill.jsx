import React, { useRef } from 'react'
import { SKILLS } from '../constants'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
    const skillref= useRef(null)

    
      useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".skill-item", {
            opacity: 0,
            y: 70,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: skillref.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
              
            },
          });
        }, skillref); // 🔥 scope fix
    
        return () => ctx.revert();
      }, []);
    

  return (
    <section className='py-18' id="skills" ref={skillref} >
        <div className=' px-4'>
        <h2 className='text-center mb-8 text-3xl lg:text-4xl font-medium'>
        Skills
        </h2>
        <div className='grid grid-cols-2 gap=8 md:grid-cols-3 lg:grid-cols-4 ' >
            {SKILLS.map((skill,index)=>(
                <div  key={index} className='flex skill-item my-7 flex-col items-center text-center'>
                    <div className='mb-4 p-2 rounded-lg backdrop-blur-sm border border-gray '>{skill.icon}</div>
                    <h3 className='mb-2 text-lg font-medium lg:text-xl'>{skill.name}</h3>
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Skill
