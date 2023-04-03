import React, { useState, useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function Cards() {

  const [styleCardDo, setStyleCardDo] = useState(false)
  const [styleCardWow, setStyleCardWow] = useState(false)

  const handleStyleDo = () => {
    setStyleCardDo(!styleCardDo)
  }

  const handleStyleWow = () => {
    setStyleCardWow(!styleCardWow)
  }

  //largeur d'ecran
  const screenWidth = window.innerWidth;

  useEffect(() => {
    gsap.to('.un', {
      height: 280,
      width: 280,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".circle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    gsap.to('.deux', {
      height: 380,
      width: 380,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".circle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    gsap.to('.trois', {
      height: 520,
      width: 520,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".circle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    gsap.to('.quatre', {
      height: 700,
      width: 700,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".circle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  //   useEffect(() => {
  //     gsap.to('.cinq', {
  //         height: 700,
  //         width: 700,
  //         duration: 0.8,
  //         stagger: 0.3,
  //         scrollTrigger: {
  //             trigger: ".circle",
  //             markers: true,
  //             start: "top center",
  //             end: "top",
  //             scrub: true
  //         }
  //     })
  // },[])
  useEffect(() => {
    const d = screenWidth / -4 ;
    console.log(screenWidth);
    console.log(d);
    gsap.to('.bulleTxt1', {
      xPercent: d,
      duration: 5,
      delay: 1,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    const d = screenWidth / -16;
    gsap.to('.bulleTxt2', {
      xPercent: d,
      duration: 5,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    const d = screenWidth / -15;
    console.log(d);
    gsap.to('.bulleTxt3', {
      xPercent: d,
      duration: 5,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    // const d = screenWidth / 25 +'px';
    gsap.to('.bulleTxt4', {
      xPercent: 25,
      duration: 5,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    // const d = screenWidth / 100 +'px';
    gsap.to('.bulleTxt5', {
      xPercent: 50,
      duration: 5,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    // const d = screenWidth / 40 +'px';
    gsap.to('.bulleTxt6', {
      xPercent: 30,
      duration: 5,
      scrollTrigger: {
        trigger: ".animateCercle",
        // markers: true,
        start: "top center",
        end: "top",
        scrub: true
      }
    })
  }, [])

  return (
    <div className='cards'>
      <h1>Prendre une assitante <br /> indépendante c'est ...</h1>
      <div className="containCards">
        <div onMouseEnter={handleStyleDo} onMouseLeave={() => setStyleCardDo(false)} className="card" id='cardDo'>
          <h2 className={styleCardDo ? 'hovered' : undefined}>Faire des <br /> économies</h2>
          <div id='mouseArrow'>
            <svg className={styleCardDo ? 'hovered' : undefined} width="140" height="140" viewBox="0 0 107 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 120.5V48.5C3.30607 32.3362 6.85764 24.5951 18 14C31.3055 3.7214 38.9975 1.41102 53 1.5C67.2548 1.46198 74.6584 5.14382 87.5 14C98.7709 23.7851 102.622 31.5207 106 48.5V120.5C103.304 136.427 99.1338 144.031 87.5 155.5C74.2321 164.771 66.6795 167.544 53 168C39.5107 168.617 31.851 165.988 18 155.5C6.12759 143.132 2.70751 135.362 0.5 120.5Z" stroke="white" strokeWidth="2" />
              <path d="M53 33V140.5M53 140.5C54.931 129.77 56.6013 124.989 61.5 120.5C67.9339 116.254 71.3956 115.212 77.5 114M53 140.5C52.07 131.232 50.6765 126.568 44.5 120.5C40.1896 116.593 36.8378 115.002 28 114" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div onMouseEnter={handleStyleWow} onMouseLeave={() => setStyleCardWow(false)} className="card" id='cardWow'>
          <h2 className={styleCardWow ? 'hovered' : undefined}><span>WOW</span> mais</h2>
          <p>aussi</p>
        </div>
      </div>
      <div className='circle'>
        <svg className='circleArrow' width="80" height="80" viewBox="0 0 337 846" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M168 846H188C198.272 736.426 226.723 695.434 336.5 675.5L332.5 636.5C267.955 643.76 236.144 659.82 188 712V0H168V846Z" fill="yellow" />
          <path d="M168.5 846H148.5C138.228 736.426 109.777 695.434 0 675.5L4 636.5C68.5447 643.76 100.356 659.82 148.5 712V0H168.5V846Z" fill="yellow" />
        </svg>
        <div className='animateCercle'>
          <div className="circle un"></div>
          <div className="circle deux"></div>
          <div className="circle trois"></div>
          <div className="circle quatre"></div>
          <div className='bulleTxt1'>Gagner en liberté, productivité, frais.</div>
          <div className='bulleTxt2'>Pour pallier à une surcharge de travail temporaire ou combler l'absence de votre secretaire en congé ou malade.</div>
          <div className='bulleTxt3'>Se dégager du temps pour son activité, ses clients, rechercher de nouveau contrats.</div>
          <div className='bulleTxt4'>Anticiper, suivre, gerer, vous êtes à jour de votre administratif.</div>
          <div className='bulleTxt5'>Terminer les frais et charges salariales.</div>
          <div className='bulleTxt6'>Pas d'engagements, pas de contrat.</div>
        </div>
      </div>
    </div>
  )
}
