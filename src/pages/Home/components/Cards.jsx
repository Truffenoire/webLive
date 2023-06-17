import React, { useState, useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


import pig from '../../../imgImport/pig.webp'

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
    const d = screenWidth / -4;
    if (window.innerWidth < 768) {
      console.log('animation');
      gsap.to('.bulleTxt1', {
        xPercent: -50,
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
    } else {
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
    }
  }, [])
  useEffect(() => {
    const d = screenWidth / -16;
    if (window.innerWidth < 768) {
      gsap.to('.bulleTxt2', {
        xPercent: -15,
        duration: 5,
        scrollTrigger: {
          trigger: ".animateCercle",
          // markers: true,
          start: "top center",
          end: "top",
          scrub: true
        }
      })
    } else {
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
    }
  }, [])
  useEffect(() => {
    const d = screenWidth / -18;
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
    if (window.innerWidth < 768) {
      console.log('animation');
    } else {
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
    }
  }, [])
  useEffect(() => {
    // const d = screenWidth / 100 +'px';
    if (window.innerWidth < 768) {
      console.log('animation');
    } else {
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
    }
  }, [])
  useEffect(() => {
    if (window.innerWidth < 768) {
      console.log('animation');
    } else {
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
    }
  }, [])

  const [widthStyle, setWidthStyle] = useState(null)

  useEffect(() => {
    setWidthStyle(window.innerWidth)
  }, [])

  return (
    <div className='cards'>
      <svg className='moveFlyStars' xmlns="http://www.w3.org/2000/svg" width="529" height="242" viewBox="0 0 529 242" fill="none">
        <path d="M469.5 43.5C469.5 43.5 438 31.9999 433 28.5C428 25 438 58.5 438 58.5C438 58.5 387 80 403 81.5C419 82.9999 447 87.5 447 87.5C447 87.5 469.5 136.5 472.5 126.5C475.5 116.5 486 96.5 486 96.5C486 96.5 530.5 100 524 93C517.5 85.9999 496.5 67.5 496.5 67.5C494.013 66.4749 515.5 28.5 504.5 32C493.5 35.5 469.5 43.5 469.5 43.5Z" stroke="#4F6272" strokeWidth="8" />
        <path d="M56 152.5C56 152.5 29.5 152.5 15.5 145C1.5 137.5 33.5 174.5 33.5 174.5C33.5 174.5 10.5 199 4.5 205.5C-1.5 212 56 198.5 56 198.5C56 198.5 84.4535 244.5 85.5 237C86.5465 229.5 92.5 198.5 92.5 198.5C92.5 198.5 139 195.5 128.5 191C118 186.5 92.5 171 92.5 171C92.5 171 99 121.177 92.5 126C86 130.823 56 152.5 56 152.5Z" stroke="#4F6272" strokeWidth="8" />
        <path d="M24 46.5C41.5915 26.3616 54.4095 18.4439 84 12C107.541 8.32776 119.778 10.1898 140.5 18C160.527 27.0714 168.069 34.9048 178 51.5C188.172 77.46 190.467 89.2665 183 101C169.855 112.196 163.147 112.336 152 105C137.573 86.7074 138.261 74.7297 149 51.5C167.099 22.7435 183 15 183 15C208.071 1.64733 214.838 2.96674 228 3.99999C245.166 5.89272 254.8 9.5305 272 21C291.428 36.8307 299.792 46.8739 311 66.5C319.62 85.1197 322.634 95.6362 325.5 114.5C323.023 136.846 319.828 146.779 311 160C296.119 178.41 285.803 180.688 265.5 177C249.435 171.221 243.412 165.299 238.5 149.5C233.388 131.946 233.123 121.399 238.5 101C247.124 77.2712 252.531 66.4709 263.5 53C283.088 34.0515 293.349 27.9115 311 21C330.058 14.2592 340.56 13.0432 359 15C385.628 19.3793 396.092 25.0477 411.5 37.5" stroke="#4F6272" strokeWidth="6" />
      </svg>
      <h1>Prendre une assitante <br /> indépendante c'est <span className='dotGrow'>...</span></h1>
      <div className="containCards">
        <div onMouseEnter={handleStyleDo} onMouseLeave={() => setStyleCardDo(false)} className="card" id='cardDo'>
          {widthStyle <= 768 ?
            <div>
              {styleCardDo ?
                <div className='pig'>
                  <img src={pig} alt="" />
                  <span>...</span>
                </div>
                :
                <h2 className='hovered'>Économiser</h2>
              }
            </div>
            :
            <div>
              {styleCardDo ?
                <h2 className='hovered'>Faire des <br /> économies</h2>
                :
                <div className='pig'>
                  <img src={pig} alt="" />
                  <span>...</span>
                </div>
              }
            </div>

          }
          <div id='mouseArrow'>
            <svg className={styleCardDo ? 'hovered' : undefined} width="140" height="140" viewBox="0 0 107 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 120.5V48.5C3.30607 32.3362 6.85764 24.5951 18 14C31.3055 3.7214 38.9975 1.41102 53 1.5C67.2548 1.46198 74.6584 5.14382 87.5 14C98.7709 23.7851 102.622 31.5207 106 48.5V120.5C103.304 136.427 99.1338 144.031 87.5 155.5C74.2321 164.771 66.6795 167.544 53 168C39.5107 168.617 31.851 165.988 18 155.5C6.12759 143.132 2.70751 135.362 0.5 120.5Z" stroke="white" strokeWidth="2" />
              <path d="M53 33V140.5M53 140.5C54.931 129.77 56.6013 124.989 61.5 120.5C67.9339 116.254 71.3956 115.212 77.5 114M53 140.5C52.07 131.232 50.6765 126.568 44.5 120.5C40.1896 116.593 36.8378 115.002 28 114" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div onMouseEnter={handleStyleWow} onMouseLeave={() => setStyleCardWow(false)} className="card" id='cardWow'>
          {widthStyle <= 768 ?
            <h2 className={styleCardWow ? 'hovered h2Wow' : 'h2Wow'}><span>WOW</span></h2>
            :
            <h2 className={styleCardWow ? 'hovered h2Wow' : 'h2Wow'}><span>WOW</span> mais</h2>
          }
          {styleCardWow ?
            <div className='hideSmile'>
              {widthStyle <= 768 ? <p><span className='h2WowHide'>mais</span>aussi</p> : <p>aussi</p>}

              <svg xmlns="http://www.w3.org/2000/svg" width="135" height="121" viewBox="0 0 135 121" fill="none">
                <path d="M132 60.5C132 91.9559 103.44 118 67.5 118C31.5603 118 3 91.9559 3 60.5C3 29.0441 31.5603 3 67.5 3C103.44 3 132 29.0441 132 60.5Z" stroke="#66CC99" strokeWidth="2" />
                <path d="M50.5 41C50.5 41 48.8484 30.203 47 26.5C44.725 21.9424 40.886 41.3535 38.5 41H21.5C18.5 41 31.5 50.5 31.5 50.5C31.5 50.5 22.5 64 28 61C33.5 58 41.9111 50.6167 41 54C41 54 54.4663 67.5632 53 64C50.4646 57.8387 53 50.5 53 50.5C53 50.5 65.5 43.5 62.5 43.5C59.5 43.5 50.5 41 50.5 41Z" stroke="#66CC99" strokeWidth="2" />
                <path d="M101.5 44C97.6143 45.9795 97.6889 33.5267 97.0001 29C95.9245 21.931 86.5001 44 86.5001 44C86.5001 44 83.283 43.1549 73.5001 44C69.064 44.3833 80.5001 53 80.5001 53C80.5001 53 74.6723 64.4085 78.0001 62.5C81.713 60.3707 91.0001 56 91.0001 56C91.0001 56 95.3134 58.3162 102.5 66C105.968 69.7078 102.5 53 102.5 53C102.5 53 104.672 49.5789 112 47C116.023 45.5844 101.5 44 101.5 44Z" stroke="#66CC99" strokeWidth="2" />
                <path d="M100.5 78.5C111.315 72.8304 55.5 92.5 36.5 79.5C36.5 79.5 41.3946 93.1347 48.5 98C54.2098 101.91 58.5841 102.758 65.5 103C73.3568 103.276 78.2549 102.038 85 98C93.3464 93.003 91.8842 83.0167 100.5 78.5Z" stroke="#66CC99" strokeWidth="2" />
              </svg>
            </div>
            :
            <div className='hideSmile'>

              <svg className='smileHide' xmlns="http://www.w3.org/2000/svg" width="131" height="122" viewBox="0 0 131 122" fill="none">
                <path d="M128.5 61C128.5 93.1441 100.465 119.5 65.5 119.5C30.5355 119.5 2.5 93.1441 2.5 61C2.5 28.8559 30.5355 2.5 65.5 2.5C100.465 2.5 128.5 28.8559 128.5 61Z" stroke="white" strokeWidth="3" />
                <path d="M82 41.5C91.8703 46.9491 96.6041 51.4595 104.5 60.5" stroke="white" strokeWidth="2" />
                <path d="M101 38.5C95.3445 46.6417 90.9557 51.1009 82.5 59" stroke="white" strokeWidth="2" />
                <path d="M32 82.0001C56.9935 80.4378 71.0065 80.2055 96 82.0001" stroke="white" strokeWidth="2" />
                <path d="M51.5 81.5C48.958 90.7655 48.8973 94.6551 51.5 99C55.9156 104.134 58.8738 106.234 66 107C72.832 105.176 75.8075 102.238 80 94.5C79.4688 88.3426 78.92 85.4997 77.5 81.5" stroke="white" strokeWidth="2" />
                <path d="M64 81C63.2017 90.5554 63.9465 94.3468 66.5 99.5" stroke="white" strokeWidth="2" />
                <path d="M32 39C36.8912 43.4283 42.5604 47.6324 55 56.5" stroke="white" strokeWidth="2" />
                <path d="M52 36.5C42.6875 47.9485 38.1881 51.6551 30.5 57" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          }
        </div>
      </div>
      <div className='circle'>
        <svg className='circleArrow' width="80" height="80" viewBox="0 0 337 846" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M168 846H188C198.272 736.426 226.723 695.434 336.5 675.5L332.5 636.5C267.955 643.76 236.144 659.82 188 712V0H168V846Z" fill="#a6cfd5" />
          <path d="M168.5 846H148.5C138.228 736.426 109.777 695.434 0 675.5L4 636.5C68.5447 643.76 100.356 659.82 148.5 712V0H168.5V846Z" fill="#a6cfd5" />
        </svg>
        <div className='animateCercle'>
          <div className="circle un"></div>
          <div className="circle deux"></div>
          <div className="circle trois"></div>
          <div className="circle quatre"></div>
          <div className='bulleTxt1'>Gagner en liberté, productivité, frais</div>
          <div className='bulleTxt2'>Pallier à une surcharge de travail temporaire ou combler l'absence de votre secrétaire en congé ou malade</div>
          <div className='bulleTxt3'>Se dégager du temps pour son activité, ses clients, rechercher de nouveau contrats</div>
          <div className='bulleTxt4'>Anticiper, suivre, gérer, vous êtes à jour de votre administratif</div>
          <div className='bulleTxt5'>Terminé les frais et charges salariales</div>
          <div className='bulleTxt6'>Pas d'engagement, pas de contrat</div>
        </div>
      </div>
    </div>
  )
}
