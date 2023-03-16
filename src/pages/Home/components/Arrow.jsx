import React, { useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Arrow() {

    useEffect(() => {
        gsap.to('.moveArrow', {
            y: 1200,
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.movePlane', {
            y: 800,
            x: -500,
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.moveSmile', {
            y: 800,
            x: 400,
            rotateZ: ('-180deg'),
            scrollTrigger: {
                trigger: ".arrow",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])

    return (
        <section className='arrow'>
            <svg className='moveArrow' width="337" height="846" viewBox="0 0 337 846" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M168 846H188C198.272 736.426 226.723 695.434 336.5 675.5L332.5 636.5C267.955 643.76 236.144 659.82 188 712V0H168V846Z" fill="#B79492" />
                <path d="M168.5 846H148.5C138.228 736.426 109.777 695.434 0 675.5L4 636.5C68.5447 643.76 100.356 659.82 148.5 712V0H168.5V846Z" fill="#B79492" />
            </svg>
            <svg className='movePlane' width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" clipPath="url(#clip0_1_13)">
                    <path d="M34 52C22.5986 30.9483 15.7347 16.2323 27 5C41.982 -3.71545 52.6864 2.10034 72 13.5C89.4589 25.6937 98.0151 34.102 111 52C126 80.9313 127.006 91.3705 116 100C105.641 105.596 96.1188 103.562 72 90C55.9894 78.0755 47.5215 70.1233 34 52Z" strokeWidth="3" stroke="#B79492" />
                    <path d="M26 98C21.0641 90.7647 16 76 34 52C46.37 34.5838 54.282 25.6918 72.5 13.5C97.8429 -1.09974 107.665 -2.34669 118.5 6C125.938 14.6372 126.543 22.6873 111 52C99.1215 67.5806 90.8055 75.9275 72.5 90C47.6631 104.154 37.4243 106.001 26 98Z" strokeWidth="3" stroke="#B79492" />
                    <path d="M1.5 122.5L115 9" stroke="#B79492" strokeWidth="3" />
                </g>
                <defs>
                    <clipPath id="clip0_1_13">
                        <rect width="124.064" height="123.908" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg className='moveSmile' width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="35.9524" y1="42.3048" x2="27.9524" y2="67.3048" stroke="#B79492" strokeWidth="2" />
                <circle cx="63" cy="63" r="62" stroke="#B79492" strokeWidth="2" />
                <path d="M18.5 50L44 58.5" stroke="#B79492" strokeWidth="2" />
                <path d="M83.5 18.5L74.5 44.5" stroke="#B79492" strokeWidth="2" />
                <path d="M92 36.5L66.5 27.5" stroke="#B79492" strokeWidth="2" />
                <path d="M102.5 58C102.5 89.5 68 111.5 36.5 91" stroke="#B79492" strokeWidth="2" />
            </svg>

        </section>
    )
}
