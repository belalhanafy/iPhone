import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HowItWorks = () => {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.to('#hiwVideo', {
            scrollTrigger: {
                trigger: '#hiwVideo',
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
        });
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: 'center bottom',
                end: "top bottom",// Animation ends when element reaches 50% of viewport
                scrub: 5,
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        gsap.to('.g_fadeIn', {
            y: 0, opacity: 1, ease: 'power2.inOut', duration: 1, scrollTrigger: {
                toggleActions: 'restart reverse restart reverse',
                trigger: ".g_fadeIn", // Element to watch
                start: "-40% bottom",// Animation starts when element is 90% into viewport
                end: "top bottom",// Animation ends when element reaches 50% of viewport
                scrub: 5.5,// Smooth scrubbing for natural movement
                // markers: true,// Enable markers for debugging
            },
        });
    }, [])
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>

                    <p className="hiw-subtitle">
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>

                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt="frame"
                                className="bg-transparent relative z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video id='hiwVideo' className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
                </div>

                <div className="hiw-text-container">
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn mb-10 md:mb-0">
                            A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span className="text-white">
                                best graphic performance by far
                            </span>.
                        </p>

                        <p className="hiw-text g_fadeIn">
                            Mobile {' '}
                            <span className="text-white">
                                games will look and feel so immersive
                            </span>,
                            with incredibly detailed environments and characters.
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                        <p className="hiw-text">New</p>
                        <p className="hiw-bigtext">Pro-class GPU</p>
                        <p className="hiw-text">with 6 cores</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks