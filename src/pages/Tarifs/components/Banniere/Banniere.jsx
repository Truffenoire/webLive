import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Banniere() {
    const rectBRef = useRef(null)
    const divBRef = useRef(null)
    const foreignRef = useRef(null)
    const boxRef = useRef(null)

    useEffect(() => {
        const rectB = rectBRef.current;
        const divB = divBRef.current;
        const foreign = foreignRef.current;
        const box = boxRef.current;
    
        gsap.set(rectB, {
            stroke: '#404e5c',
            strokeWidth: '5',
            strokeDasharray: '1600',
            strokeDashoffset: '1600',
        });

        const boxTL = gsap.timeline();

        boxTL
        
        .to(rectB, {
            x:'-599',
            rotateZ: -15,
            strokeDashoffset: 0,
            // duration: 2,
        })
        .to(rectB, {
            fill: '#404e5c',
            // duration: 2,
        })
        .to(divB, {
            opacity: 1,
            border: 5,
            borderRadius: 9.5,
            // duration: 1,
        })
        .to(foreign, {
            rotateZ: -15,
            x: -100,
            // duration: 1,
        })
        
    
        ScrollTrigger.create({
        trigger: box,
        start: 'top 60%',
        end: 'bottom 65%',
        scrub: true,
        // markers: true,
        animation: boxTL,
    })
      
    }, []);

    return (
        <div className='banniere'>
            <h2>
                Vous avez la possibilité d'acheter quelques heures au détail au tarif de 45€ l'unité.<br />
                en cas de deplacement, le temps de trajet et les frais kilométriques sont facturés en fonction du barème en vigueur.
            </h2>
            <div ref={boxRef} className="boxToRight">
                <svg width="400" height="400" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect ref={rectBRef} x="599" y="150" width="399" height="399" rx="9.5" stroke="black" />
                    <foreignObject ref={foreignRef} x='99' y='150' width='399' height="399">
                    <div ref={divBRef} className='txtBox'>
                        100% <br/>
                        personnalisé selon vos idées, besoins <br/> et vos envies
                    </div>
                </foreignObject>
                </svg>
            </div>
        </div>
    )
}
