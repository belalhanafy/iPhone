import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import ModelView from './ModelView';
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { models, sizes } from '../constants'
import { animateWithGsapTimeline } from '../utils/animations';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Model = () => {
    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iphone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg
    })

    //camera control for the model view
    const cameraControlSmall = useRef(null)
    const cameraControlLarge = useRef(null)

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());


    //rotation
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }

        if (size === 'small') {
            animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }
    }, [size])

    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1, y: 0, scrollTrigger: {
                toggleActions: 'restart reverse restart reverse',
                trigger: "#heading", // Element to watch
                start: "top 90%",// Animation starts when element is 90% into viewport
                end: "top 50%",// Animation ends when element reaches 50% of viewport
                scrub: 1,// Smooth scrubbing for natural movement
                // markers: true,// Enable markers for debugging
            },
        });
    }, [])
    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id='heading' className='section-heading'>Take a closer look.</h1>

                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                        <ModelView index={1} groupRef={small} gsapType='view1' controlRef={cameraControlSmall} setRotationState={setSmallRotation} item={model} size={size} />
                        <ModelView index={2} groupRef={large} gsapType='view2' controlRef={cameraControlLarge} setRotationState={setLargeRotation} item={model} size={size} />

                        <Canvas eventSource={document.getElementById('root')} className='w-full h-full ' style={{
                            position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden'
                        }}>
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className='mx-auto w-full'>
                        <p className='text-sm font-light text-center mb-5'>{model.title}</p>

                        <div className='flex-center'>
                            <ul className='color-container'>
                                {models.map((item, index) => (
                                    <li key={index} className='w-6 h-6 cursor-pointer rounded-full mx-2' style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)}></li>
                                ))}
                            </ul>

                            <button className='size-btn-container'>
                                {sizes.map(({ label, value }) => (
                                    <span key={label} className='size-btn' onClick={() => setSize(value)} style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }}>
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model