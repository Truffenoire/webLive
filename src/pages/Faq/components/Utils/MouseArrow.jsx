import React, { useEffect, useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MouseArrow() {

    const arrowRef = useRef(null)

    useEffect(() => {
        const arrow = arrowRef.current

        gsap.set(arrow, {
            // stroke: '#a6cfd5',
            strokeWidth: '2',
            scale: '1.1',
            strokeDasharray: '260',
            strokeDashoffset: '260',
        })

        const arrowTL = gsap.timeline({
            repeat: -1, 
            repeatDelay: -5,
        });
        arrowTL.to(arrow, {
            strokeDashoffset: 0,
            duration: 8,
            scale: '1',
        })

        ScrollTrigger.create({
            trigger: arrow,
            // markers: true,
            start: 'top 80%',
            animation: arrowTL,
        })
    }, [])

    return (
        <div style={{height: '148px', width: '95px', transform: 'rotate(270deg)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="148" viewBox="0 0 95 148" fill="none">
                <rect x="0.5" y="0.5" width="94" height="147" rx="47" stroke="black" />
                <path ref={arrowRef} d="M65.5 118.5C60.255 119.05 57.4599 119.512 55 123C50.771 127.371 49.5 136.5 49.5 136.5M49.5 136.5C49.5 136.5 47.5449 126.785 42.5 123C39.1292 120.188 36.8975 119.286 32.5 118.5M49.5 136.5L48.5 33.5" stroke="black" />
            </svg>
        </div>
    )
}
