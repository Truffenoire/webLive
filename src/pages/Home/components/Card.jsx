import React, { useRef, useEffect, useState } from 'react';
// import icons
import { CgSandClock } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";
import { GiPiggyBank } from "react-icons/gi";
import { RiSuitcaseFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
// ------
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Card = () => {

    const cardsRef = useRef(null)

    // Animation carte principale
    useEffect(() => {
        gsap.fromTo(".card",
            {
                x: -600, delay: 0.3, opacity: 0, keyframes: [{ x: 50, duration: 2 }, { x: 0, duration: 2 }], ease: "elastic.out(1, 0.3)"
            },
            {
                x: 0, opacity: 1, keyframes: [{ x: -50, duration: 1 }, { x: 0, duration: 1 }], ease: "elastic.out(1, 0.3)",
                scrollTrigger: {
                    trigger: ".card",
                }
            }
        )
    }, []);
    // Animation carte principale
    // useEffect(() => {
    //     const TLLetters = gsap.timeline({ opacity: 0 });
    //     TLLetters
    //     .fromTo(cardsRef.current.childNodes[0],
    //         {
    //             x: -600, opacity: 0, keyframes: [{ x: 50 }, { x: 0 }], ease: "elastic.out(1, 0.3)"
    //         },
    //         {
    //             x: 0, opacity: 1, keyframes: [{ x: -50 }, { x: 0 }], ease: "elastic.out(1, 0.3)",
    //             scrollTrigger: {
    //                 trigger: cardsRef.current.childNodes[0],
    //             }
    //         }
    //     )
    //     .fromTo(cardsRef.current.childNodes[1],
    //         {
    //             x: -600, opacity: 0, keyframes: [{ x: 50 }, { x: 0 }], ease: "elastic.out(1, 0.3)"
    //         },
    //         {
    //             x: 0, opacity: 1, keyframes: [{ x: -50 }, { x: 0 }], ease: "elastic.out(1, 0.3)",
    //             scrollTrigger: {
    //                 trigger: cardsRef.current.childNodes[1],
    //             }
    //         }
    //     )
    //     .fromTo(cardsRef.current.childNodes[2],
    //         {
    //             x: -600, opacity: 0, keyframes: [{ x: 50 }, { x: 0 }], ease: "elastic.out(1, 0.3)"
    //         },
    //         {
    //             x: 0, opacity: 1, keyframes: [{ x: -50 }, { x: 0 }], ease: "elastic.out(1, 0.3)",
    //             scrollTrigger: {
    //                 trigger: cardsRef.current.childNodes[2],
    //             }
    //         }
    //     )
    // }, []);

    // Animation carte .cardOne
    useEffect(() => {
        gsap.fromTo(".cardOne",
            {
                y: -100, opacity: 0, delay: 0.3,
            },
            {
                y: 0, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger: ".cardOne",
                }
            }
        )
    }, []);

    // Animation carte .cardTwo
    useEffect(() => {
        gsap.fromTo(".cardTwo",
            {
                y: 100, opacity: 0, delay: 0.3,
            },
            {
                y: 0, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger: ".cardTwo",
                }
            }
        )
    }, []);

    return (
        <>
        <div className="bgCard" ref={cardsRef}>
            <div className='card'>
                <div className='flex'><div className='icon'><GiPiggyBank /></div><div className="txt">Sans frais liés à l'embauche</div></div>
            </div>
            <div className='card'>
                <div className='flex'><div className='icon'><CgSandClock /></div><div className="txt">Sans engagement, ponctuellement ou régulièrement</div></div>
            </div>
            <div className='card'>
                <div className='flex'><div className='icon'><AiOutlineWifi /></div><div className="txt">À distance ou de son domicile</div></div>
            </div>
        </div>
            <div className='twoCard'>
                <div className='twoFlex cardOne'><div className='twoCardIcon'><RiSuitcaseFill /></div><div className='twoCardTxt'>Moyennes et petites entreprises</div></div>
                <div className='twoFlex cardTwo'><div className='twoCardIcon'><CgProfile /></div><div className='twoCardTxt'>Aide aux particuliers</div></div>
            </div>
        </>
    );
};

export default Card;