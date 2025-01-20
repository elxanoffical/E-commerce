import React, { useEffect, useRef } from 'react'
import FeaturesCard from './featuresCard';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Features = ({features}) => {

   const featureAnimate = useRef()
  
  
      useEffect(()=>{
  
        gsap.fromTo(
          featureAnimate.current.children,
          { opacity: 0, x: -50, y: -20, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            stagger: 0.3,
            duration: 0.8,
            scrollTrigger: {
              trigger: featureAnimate.current, // Elementi izləmək üçün
              start: "top 70%",         // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
              end: "bottom 20%",        // Animasiya harada bitməli
              toggleActions: "play none none none", // Animasiya hərəkətləri
            },
          }
        );
      },[])

  return (
    <section className="dark:bg-black">
    <div ref={featureAnimate}
      className=" container py-8 pt-16 gap-10
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features?.map((item) => {
        return <FeaturesCard key={item.documentId} item={item} />;
      })}
    </div>
  </section>
  )
}

export default Features