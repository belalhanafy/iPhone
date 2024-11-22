import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg } from '../utils'
import { rightImg } from '../utils'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HighlightsVidCarousel from './HighlightsVidCarousel';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to('.link', {
      scrollTrigger: {
        toggleActions: 'restart reverse restart reverse',
        trigger: ".link", // Element to watch
        start: "top 90%",// Animation starts when element is 90% into viewport
        end: "top 50%",// Animation ends when element reaches 50% of viewport
        scrub: 1,// Smooth scrubbing for natural movement
        // markers: true,// Enable markers for debugging
      },
      opacity: 1, y: 0, duration: 1, stagger: 0.25
    })
    gsap.to('#title', {
      opacity: 1, y: 0, scrollTrigger: {
        toggleActions: 'restart reverse restart reverse',
        trigger: "#title", // Element to watch
        start: "top 90%",// Animation starts when element is 90% into viewport
        end: "top 50%",// Animation ends when element reaches 50% of viewport
        scrub: 1,// Smooth scrubbing for natural movement
        // markers: true,// Enable markers for debugging
      },
    });
  }, [])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='w-full mb-12 md:flex justify-between items-end'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>

          <div className='flex flex-wrap md:justify-between items-end gap-5'>
            <p className='link flex items-baseline'>
              Watch the film
              <img className=' ml-2' src={watchImg} alt="" />
            </p>
            <p className='link'>
              Watch the event
              <img className='ml-2' src={rightImg} alt="" />
            </p>
          </div>
        </div>

        <HighlightsVidCarousel />
      </div>
    </section>
  )
}

export default Highlights