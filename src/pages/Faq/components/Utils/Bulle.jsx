import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Bulle() {

    const bullRef = useRef(null)
    const pTabRef = useRef(null)

    const [spanAnime, setSpanAnime] = useState([])

    useEffect(() => {
        const tabP = 'La durée légale de travail à temps partiel est de 24h/semaine, soit l’équivalent de 104h/mois. En deça, sauf accord de branche étendue ou convention collective, vous n’êtes pas autorisé à embaucher.'
        const letters = tabP.split('')
        setSpanAnime(letters)

    }, [])


    useEffect(() => {
        const animateSpan = () => {
            const tabSpan = document?.querySelector('div.tabP')
            // console.log(spanAnime);
            const refSpan = pTabRef.current.children

            const pTL = gsap.timeline()
            pTL
                .to(tabSpan, {
                    x: 0,
                    opacity: 1,
                    ease: 'bounce'
                })
                .to(refSpan, {
                    color: "#4f6272",
                    top: 0,
                    opacity: 1,
                    stagger: 0.1,
                })

            ScrollTrigger.create({
                trigger: '.tabP',
                // markers: true,
                start: 'top 70%',
                end: 'bottom 50%',
                scrub: true,
                animation: pTL,
            })
        };
        animateSpan()
    }, [spanAnime])


    return (
        <>
            <div ref={bullRef} className='bullContain'>
                <div ref={pTabRef} className='tabP'>
                    <h4 className='titleBulle'>pour info :</h4>
                    {spanAnime.map((el, i) => (
                        <span key={i} className='letter'>{el}</span>
                    ))}
                </div>
            </div>
        </>
    )
}
