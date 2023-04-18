import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import MouseArrow from '../Utils/MouseArrow';
import Bulle from '../Utils/Bulle';
import TabList from './components/TabList/TabList';

export default function How() {

    const [numberChange, setNumberChange] = useState(null)
    const [numberChangeFixe, setNumberChangeFixe] = useState(null)

    const [isClicked, setClicked] = useState(true)
    const [divClicked, setDivClicked] = useState([])
    const [isClickedId, setIsClickedId] = useState([])


    // useEffect(() => {
    //     console.log(isClicked);
    //   }, [isClicked]);

    const handleClick = (e) => {
        const id = e.target.closest('li').getAttribute('data-id')
        const divColor = e.target.closest('li')?.children[1]
        const liAnimate = divClicked[3]?.children[0].children;

        if (isClickedId.includes(id)) {
            setIsClickedId(isClickedId.filter((clickedId) => clickedId !== id));
            gsap.to(divClicked[id], { height: 0, })
            gsap.to(divColor, { color: "#a6cfd5", })
        } else {
            setIsClickedId([...isClickedId, id])
            switch (id) {
                case '0':
                    gsap.to(divClicked[0], { height: 'max-content' });
                    gsap.to(divColor, { color: "#b79492" });
                    break;
                case '3':
                    gsap.to(divClicked[3], { height: 300 });
                    gsap.to(divColor, { color: "#b79492" });
                    const liTL = gsap.timeline();
                    liTL.fromTo(liAnimate,
                        {
                            x: -50,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            stagger: 0.3,
                        }
                    );
                    break;

                default:
                    gsap.to(divClicked[id], { height: 400 });
                    gsap.to(divColor, { color: "#b79492" });
                    break;
            }
        }
    }

    const numRef = useRef([])
    const numRefFixe = useRef([])

    useEffect(() => {
        const divAnime = document.querySelectorAll('.hide')
        setDivClicked(divAnime)
        setNumberChange(numRef)
        setNumberChangeFixe(numRefFixe)
    }, [])

    const handleMouseEnter = (e) => {
        const id = e.target.closest('li').getAttribute('data-id')
        const translateNum = numberChange.current[id]
        const translateNumFixe = numRefFixe.current[id]
        if (translateNum != null && translateNumFixe != null) {

            const transEnfantNum = translateNum?.children
            const transEnfantNumFixe = translateNumFixe.children

            const numTl = gsap.timeline()

            numTl
                .to(translateNum, {
                    opacity: 1,
                    y: 30,
                    // top: 16.5,
                    duration: 0.3,
                })
                .to(transEnfantNum, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.3,

                })

            gsap.to(transEnfantNumFixe, {
                opacity: 0,
                y: 80,
                duration: 0.5,
                stagger: 0.1,
            })
        } else {
            return
        }
    }
    const handleMouseLeave = (e) => {
        const id = e.target.closest('li').getAttribute('data-id')
        const translateNum = numRef.current[id]
        const translateNumFixe = numRefFixe.current[id]
        if (translateNum != null && translateNumFixe != null) {

            const transEnfantNum = translateNum.children
            const transEnfantNumFixe = translateNumFixe.children

            const numTl = gsap.timeline()

            numTl
                .to(transEnfantNum, {
                    opacity: 0,
                    y: -80,
                    duration: 0.3,
                })
                .to(transEnfantNum, {
                    y: -25,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.3,

                })
            gsap.to(transEnfantNumFixe, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.3,
            })
        } else {
            return
        }
    }

    return (
        <div className='howFaq'>
            <ul className='howList'>
                <li data-id='0' onMouseLeave={handleMouseLeave} onMouseOver={handleMouseEnter} className='liList'>
                    <div className='number'>
                        <ul className='numList'>
                            <li ref={(el) => (numRef.current[0] = el)} className='liNumListTranslate'>
                                <div className='numbersTranslate'>0</div>
                                <div className='numbersTranslate'>1</div>
                            </li>
                            <li ref={(el) => (numRefFixe.current[0] = el)} className='liNumList'>
                                <div className='numbersFixe'>0</div>
                                <div className='numbersFixe'>1</div>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>Pourquoi une assistante indépendante coûte <span>-</span> cher...</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>
                    <div className="arrowH2">
                        <MouseArrow />
                        <h2> Grâce à l'absence de taxes...</h2>
                    </div>
                    <Bulle />
                    <TabList />

                </div>
                <li data-id='1' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='liList'>
                    <div className='number'>
                        <ul className='numList'>
                            <li ref={(el) => (numRef.current[1] = el)} className='liNumListTranslate'>
                                <div className='numbersTranslate'>0</div>
                                <div className='numbersTranslate'>2</div>
                            </li>
                            <li ref={(el) => (numRefFixe.current[1] = el)} className='liNumList'>
                                <div className='numbersFixe'>0</div>
                                <div className='numbersFixe'>2</div>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>Comment s'applique nos tarifs ?</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>
                    Chaque assistante indépendante a sa propre façon de facturer : au détail, à l’heure, au mois…
                    J’ai opté pour un tarif forfaitaire que chaque client définit en début de mission, et qu’il peut adapter en fonction de son budget et de la quantité de travail dont il a besoin.
                    Les tarifs sont dégressifs en fonction de la quantité d'heures demandées, le plus avantageux étant de travailler ensemble tous les mois.
                </div>
                <li data-id='2' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='liList'>
                    <div className='number'>
                        <ul className='numList'>
                            <li ref={(el) => (numRef.current[2] = el)} className='liNumListTranslate'>
                                <div className='numbersTranslate'>0</div>
                                <div className='numbersTranslate'>3</div>
                            </li>
                            <li ref={(el) => (numRefFixe.current[2] = el)} className='liNumList'>
                                <div className='numbersFixe'>0</div>
                                <div className='numbersFixe'>3</div>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>Avec quelles entreprises je travaille ?</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>Tous types d'entreprises. Cela peut être des commerces, PME, TPE et même particuliers. Mes plus fidèles clients sont dans le BTP et le nettoyage, mais je m'adapte à toutes les situations.</div>
                <li data-id='3' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='liList'>
                    <div className='number'>
                        <ul className='numList'>
                            <li ref={(el) => (numRef.current[3] = el)} className='liNumListTranslate'>
                                <div className='numbersTranslate'>0</div>
                                <div className='numbersTranslate'>4</div>
                            </li>
                            <li ref={(el) => (numRefFixe.current[3] = el)} className='liNumList'>
                                <div className='numbersFixe'>0</div>
                                <div className='numbersFixe'>4</div>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>Comment puis-je payer ?</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>
                    <ul className='wrapList'>
                        <li>Paypay</li>
                        <li>Virement bancaire</li>
                        <li>Lien sur facture (CB, Apple Pay, Google Pay.) + 3%</li>
                    </ul>
                </div>
                <li data-id='4' className='liList'></li>
            </ul>
        </div>
    );
}
