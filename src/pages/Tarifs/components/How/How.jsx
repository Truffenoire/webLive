import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        const liAnimate = divClicked[0]?.children[0].children;

        if (isClickedId.includes(id)) {
            setIsClickedId(isClickedId.filter((clickedId) => clickedId !== id));
            gsap.to(divClicked[id], { height: 0, })
            gsap.to(divColor, { color: "#a6cfd5", })
        } else {
            setIsClickedId([...isClickedId, id])
            switch (id) {
                case '0':
                    gsap.to(divClicked[0], { height: 100 });
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
                case '4':
                    gsap.to(divClicked[4], { height: 325 });
                    break;

                default:
                    gsap.to(divClicked[id], { height: 100 });
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
        <div className='how'>
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
                    <div className='title'>Contactez moi !</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>
                    <ul>
                        <li>Mail</li>
                        <li>Téléphone</li>
                        <li>Visio-conférence</li>
                        <li>rendez-vous</li>
                    </ul>
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
                    <div className='title'>Devis et validation</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>Je vous transmet mon devis, que vous me renvoyez signé par mail.</div>
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
                    <div className='title'>Echange de consignes</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>Nous échangeons les documents et informations nécéssaires au travail attendu.</div>
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
                    <div className='title'>Go !</div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>Le travail est rendu dans les délais impartis, je vous envoie ma facture de prestation de service à l'issu.</div>
                <li data-id='4' className='liList'>
                    <div className='number'>*</div>
                    <div className='title'></div>
                    <div onClick={handleClick} className='btn'>+</div>
                </li>
                <div className='hide'>Certain chefs d'entreprises sont très à l'aise avec les nouvelles technoligies, d'autres beaucoup moins.
                    <br />je m'adapte à vos outils et connaissances afin d'être le <span>+</span> efficace possible.
                    Les chefs d'entreprise étant enormément solicités, il est promordial d'être réactive à leur demandes. <br />
                    La transmition d'informations est essentielle à cette réactivité.
                </div>
            </ul>
        </div>
    );
}
