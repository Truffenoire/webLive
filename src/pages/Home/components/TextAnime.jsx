import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'

const Text = () => {

    const wordsRef = useRef(null)
    const barre = useRef(null)

    useEffect(() => {
        // console.log(barre);
        const TLLetters = gsap.timeline({ repeat: -1, delay: 0.1 });
        TLLetters
            .from(wordsRef.current.childNodes[0].childNodes, { display: 'none', backgroundColor: "transparent", stagger: 0.1, delay: 0.1 })
            .to(wordsRef.current.childNodes[0].childNodes, { display: 'none', backgroundColor: '#D5ACA9', color: "white", stagger: 0 })

            .from(wordsRef.current.childNodes[1].childNodes, { display: 'none', backgroundColor: "transparent", stagger: 0.1, delay: 0.1 })
            .to(wordsRef.current.childNodes[1].childNodes, { display: 'none', backgroundColor: '#D5ACA9', color: "white", stagger: 0 })

            .from(wordsRef.current.childNodes[2].childNodes, { display: 'none', backgroundColor: "transparent", stagger: 0.1, delay: 0.1 })
            .to(wordsRef.current.childNodes[2].childNodes, { display: 'none', backgroundColor: '#D5ACA9', color: "white", stagger: 0 })

            .from(wordsRef.current.childNodes[3].childNodes, { display: 'none', backgroundColor: "transparent", stagger: 0.1, delay: 0.1 })
            .to(wordsRef.current.childNodes[3].childNodes, { display: 'none', backgroundColor: '#D5ACA9', color: "white", stagger: 0 })

    }, [])

    return (
        <div className='textAnimContain'>
            <div className='backImg'>
                {/* <img src={imgTxt} alt="" /> */}
            </div>
            <div className="text">
                <h4>Hey, Petites et moyennes entreprises</h4>
                <div>
                    Délèguez votre gestion administrative à une assistante indépendante <br /> afin de gagner en : 
                    <span className='wordContain' ref={wordsRef}>
                        <span className="frais">
                            <span>F</span>
                            <span>r</span>
                            <span>a</span>
                            <span>i</span>
                            <span>s</span>
                        </span>
                        <span className='temps'>
                            <span>T</span>
                            <span>e</span>
                            <span>m</span>
                            <span>p</span>
                            <span>s</span>
                        </span>
                        <span className='liberté'>
                            <span>L</span>
                            <span>i</span>
                            <span>b</span>
                            <span>e</span>
                            <span>r</span>
                            <span>t</span>
                            <span>é</span>
                        </span>
                        <span className='productivité'>
                            <span>P</span>
                            <span>r</span>
                            <span>o</span>
                            <span>d</span>
                            <span>u</span>
                            <span>c</span>
                            <span>t</span>
                            <span>i</span>
                            <span>v</span>
                            <span>i</span>
                            <span>t</span>
                            <span>é</span>
                        </span>
                        <span className='barre' ref={barre}></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Text;