import React, { useEffect, useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


export default function Title() {

    const h1Ref = useRef(null)

    useEffect(() => {
        //decompose une phrase lettres par lettres
        // const element = h1Ref.current
        // const texte = element.innerText
        // const lettres = texte.split('')
        // element.innerHTML = ''

        // lettres.forEach((lettre) => {
        //     const span = document.createElement('span');
        //     span.textContent = lettre;
        //     element.appendChild(span);
        // });
        //-------------------
        // const spans = element.querySelectorAll('span')
        // console.log(spans);
        const spans = document.querySelectorAll('h1.bannerTarif span')
        gsap.fromTo(spans, 
        {
            y: -100,
            opacity: 0,
            // color: 'blue'
        },
        {
            y: 0,
            color: '#b79492',
            opacity: 1,
            duration: 0.2,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "h1.bannerTarif",
                // markers: true,
                start: "top 60%",
                end: "bottom 60%",
                scrub: true
            }
        })
    }, [])

    return (
        <section className='tarifs'>
            <h1 ref={h1Ref} className="bannerTarif"><span>Les</span> <span>Tarifs</span></h1>
        </section>
    )
}
