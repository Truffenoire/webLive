import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function Card() {

    const [navSafari, setNavSafari] = useState(false)


    const rectRef = useRef(null);
    const rectRef1 = useRef(null);
    const divRef = useRef(null)
    const divRef1 = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setNavSafari(!navSafari)
        }
    }, [])
    // si safari animation

    useEffect(() => {
        if (navSafari) {
            const div = divRef.current;
            const div1 = divRef1.current;
            console.log(div, div1);
            const cardTLSaf = gsap.timeline();
            cardTLSaf
                .to([div, div1], {
                    background: '#a6cfd5',
                    opacity: 1,
                    stagger: 0.2,
                    ease: "ease-in",
                    duration: 0.5,
                })
                .fromTo([div.children[0].children, div.children[1].children, div1.children[0].children, div1.children[1].children],
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        ease: 'back',
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                    })
    
    
            ScrollTrigger.create({
                trigger: [div, div1],
                // markers: true,
                start: 'top 30%',
                animation: cardTLSaf,
            })
        }
    }, [navSafari])


    //-------------
    const divStyles = {
        zIndex: '100',
        borderRadius: '10px',
        height: '100%',
        width: '100%',
        opacity: '0',
    }

    useEffect(() => {
        if(navSafari === false){
            const rect = rectRef.current;
            const rect1 = rectRef1.current;
            const div = divRef.current;
            const div1 = divRef1.current;
    
            gsap.set([rect, rect1], {
                stroke: '#a6cfd5',
                strokeWidth: '1',
                strokeDasharray: '1600',
                strokeDashoffset: '1600',
            });
    
            const cardTL = gsap.timeline();
    
            cardTL.to([rect, rect1], {
                strokeDashoffset: 0,
                duration: 1,
                stagger: 0.5,
            }).to([div, div1], {
                fill: "#a6cfd5",
                background: '#a6cfd5',
                opacity: 1,
                stagger: 0.2,
                ease: "ease-in",
                duration: 0.5,
            })
                .fromTo([div.children[0].children, div.children[1].children, div1.children[0].children, div1.children[1].children],
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        ease: 'back',
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                    })
    
    
            ScrollTrigger.create({
                trigger: [rect, rect1],
                // markers: true,
                start: 'top 30%',
                animation: cardTL,
            })
        }

    }, []);


    useEffect(() => {
        if(navSafari === false){
            const btn = btnRef.current
    
            gsap.set(btn, {
                display: 'inline-block',
                stroke: '#a6cfd5',
                strokeWidth: '1',
                strokeDasharray: '260',
                strokeDashoffset: '260',
            })
            const btnTLine = gsap.timeline();
            btnTLine.to(btn, {
                strokeDashoffset: 0,
                duration: 2,
            })
                .to('.txtBtn', {
                    scale: 1,
                    ease: 'back',
                });
    
            ScrollTrigger.create({
                trigger: btn,
                // markers: true,
                start: 'top 50%',
                animation: btnTLine,
            })
        }
    }, [navSafari])

    return (
        <section className="cardTarif">
            {navSafari ?
                <>
                    <div className="boxSvgSafari">
                        <div className='contain safariContain' ref={divRef}>
                            <div className="forfaitContain">
                                <h3 className='forfait'>
                                    Forfait
                                </h3>
                                <div className="heure">5h</div>
                                <div className="prix">225€</div>
                            </div>
                            <div className="forfaitContain bLeft">
                                <h3 className='forfait'>
                                    Forfait
                                </h3>
                                <div className="heure">10h</div>
                                <div className="prix">430€</div>
                            </div>
                        </div>

                        <div className='contain safariContain' ref={divRef1}>
                            <div className="forfaitContain">
                                <h3 className='forfait'>
                                    Forfait
                                </h3>
                                <div className="heure">15h</div>
                                <div className="prix">590€</div>
                            </div>
                            <div className="forfaitContain bLeft">
                                <h3 className='forfait'>
                                    Forfait
                                </h3>
                                <div className="heure">Mensuel</div>
                                <div className="prix mPrice">Sur devis <br /><span> wow!</span> <br /> encore <b>+</b> avantageux</div>
                            </div>
                        </div>

                    </div>
                    <div role='button' className='txtBtnSafari'>
                        Devis Gratuit
                    </div>
                </>
                :
                <>
                    <div className="boxSvg">
                        <svg viewBox="0 0 400 400">
                            <foreignObject x='25' y='25' width='350' height="350">
                                <div className='contain' ref={divRef} style={divStyles}>
                                    <div className="forfaitContain">
                                        <h3 className='forfait'>
                                            Forfait
                                        </h3>
                                        <div className="heure">5h</div>
                                        <div className="prix">225€</div>
                                    </div>
                                    <div className="forfaitContain bLeft">
                                        <h3 className='forfait'>
                                            Forfait
                                        </h3>
                                        <div className="heure">10h</div>
                                        <div className="prix">430€</div>
                                    </div>
                                </div>
                            </foreignObject>
                            <rect
                                ref={rectRef}
                                x="25"
                                y="25"
                                rx="10"
                                ry="10"
                                width="350"
                                height="350"
                                fill="none"
                            >
                            </rect>
                        </svg>
                        <svg viewBox="0 0 400 400">
                            <foreignObject x='25' y='25' width='350' height="350">
                                <div className='contain' ref={divRef1} style={divStyles}>
                                    <div className="forfaitContain">
                                        <h3 className='forfait'>
                                            Forfait
                                        </h3>
                                        <div className="heure">15h</div>
                                        <div className="prix">590€</div>
                                    </div>
                                    <div className="forfaitContain bLeft">
                                        <h3 className='forfait'>
                                            Forfait
                                        </h3>
                                        <div className="heure">Mensuel</div>
                                        <div className="prix mPrice">Sur devis <br /><span> wow!</span> <br /> encore <b>+</b> avantageux</div>
                                    </div>
                                </div>
                            </foreignObject>
                            <rect
                                ref={rectRef1}
                                x="25"
                                y="25"
                                rx="10"
                                ry="10"
                                width="350"
                                height="350"
                                fill="none"
                            >
                            </rect>
                        </svg>
                    </div>
                    <div className="svgBtn">
                        <svg
                            viewBox="0 0 100 50"
                            role="button"
                            tabIndex="0"
                        // onClick={onClick}
                        // onKeyDown={onKeyDown}
                        >
                            <rect ref={btnRef} x="0" y="0" width="100px" height="50px" rx="25" fill="#fff" />
                            <foreignObject x='0' y='0' width='100' height="50">
                                <div className='txtBtn'>
                                    Devis Gratuit
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </>
            }
        </section>
    );

}
