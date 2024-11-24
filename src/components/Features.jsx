import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Features = () => {

    const videoRef = useRef();
    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                start: 'top bottom',
                toggleActions: 'play none none none',
                onEnter: () => {
                    videoRef.current.currentTime = 0; // Reset video to start
                    videoRef.current.play(); // Play video
                },
                onEnterBack:() =>{
                    videoRef.current.currentTime = 0; // Reset video to start
                    videoRef.current.play(); // Play video

                },
                onLeaveBack: () => {
                    videoRef.current.pause(); // Pause video when scrolling back
                }
            }
        })
        gsap.to('#features-title', {
            opacity: 1, y: 0, scrollTrigger: {
                toggleActions: 'restart reverse restart reverse',
                trigger: "#features-title", // Element to watch
                start: "top 90%",// Animation starts when element is 90% into viewport
                end: "top 50%",// Animation ends when element reaches 50% of viewport
                scrub: 1,// Smooth scrubbing for natural movement
                // markers: true,// Enable markers for debugging
            },
        });
        gsap.to('.g_grow', {
            scale: 1, opacity: 1, ease: 'power1', scrollTrigger: {
                toggleActions: 'restart reverse restart reverse',
                trigger: ".g_grow", // Element to watch
                start: "center bottom",// Animation starts when element is 90% into viewport
                end: "top 50%",// Animation ends when element reaches 50% of viewport
                scrub: 5.5,// Smooth scrubbing for natural movement
                // markers: true,// Enable markers for debugging
            },
        });
        gsap.to('.g_text', {
            y: 0, opacity: 1, ease: 'power2.inOut', duration: 1, scrollTrigger: {
                toggleActions: 'restart reverse restart reverse',
                trigger: ".g_text", // Element to watch
                start: "top bottom",// Animation starts when element is 90% into viewport
                // markers: true,// Enable markers for debugging
            },
        });
    }, [])
    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-wdith">
                <div className="mb-12 w-full">
                    <h1 id="features-title" className="section-heading">Explore the full story.</h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 text-center">
                        <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
                    </div>

                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>

                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                                </div>
                            </div>

                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        iPhone 15 Pro is {' '}
                                        <span className="text-white">
                                            the first iPhone to feature an aerospace-grade titanium design
                                        </span>,
                                        using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>
                                        You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features