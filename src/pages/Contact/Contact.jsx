import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// import WhatsAppImg from '../../imgImport/WhatsAppButtonGreenLarge.svg'
import BureauEmail from '../../imgImport/email-collage-counter.png'
import Lettre from '../../imgImport/lettre.png'
import Letter from '../../imgImport/letter.png'
import Timbre from '../../imgImport/timbre.png'
import Timbre2 from '../../imgImport/timbre2.png'
import Enveloppe from '../../imgImport/enveloppe.png'
import Cacheté from '../../imgImport/lettreCachet.png'



// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


export default function Contact() {
    // Formulaire
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    // -------
    const [isSended, setIsSended] = useState(false)
    const form = useRef();

    const sendEmail = data => {
        // e.preventDefault();
        console.log('useForm', data);
        console.log('useRef', form.current);
        setIsSended(true)
        emailjs.sendForm('service_wqic8du', 'template_q9ohhdd', form.current, 'zJihS0iRqjWy0B2fw')
            .then((result) => {
                console.log(result.text);
                setIsSended(true)
                reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    // Animation Scroll ---
    const timbreRef = useRef(null)
    const timbre2Ref = useRef(null)
    const letterRef = useRef(null)
    const lettreRef = useRef(null)
    const lettre2Ref = useRef(null)
    const enveloppeRef = useRef(null)
    const cachetéRef = useRef(null)

    useEffect(() => {
        gsap.to('.enveloppe', {
            y: -1200,
            x: 300,
            rotateZ: ('-180deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.lettre', {
            y: -1000,
            rotateZ: ('180deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.lettre2', {
            y: -100,
            rotateZ: ('30deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.letter', {
            y: -800,
            rotateZ: ('-180deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.timbre', {
            x: 800,
            rotateZ: ('-180deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.timbre2', {
            x: -1000,
            y: -400,
            rotateZ: ('90deg'),
            duration: 10,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.cacheté', {
            rotateZ: ('-45deg'),
            duration: 15,
            scrollTrigger: {
                trigger: ".gsapEmail",
                // markers: true,
                start: "top center",
                // end: "top 80px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.to('.formulaire', {
            x: 0,
            duration: 15,
            scrollTrigger: {
                trigger: ".formulaire",
                // markers: true,
                start: "top bottom",
                end: "top 250px",
                scrub: true
            }
        })
    }, [])
    // ---


    return (
        <div className="contact">
            <div className='containerTxt'>
                <div className='txt'>Entrer en contact</div>
                <div className='txt'>Entrer en contact</div>
                <div className='txt'>Entrer en contact</div>
                <div className='txt'>Entrer en contact</div>
                <div className='txt'>Entrer en contact</div>
            </div>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="calque_1" x="0px"
                    y="0px" viewBox="0 0 1300 550" xmlSpace="preserve">

                    {/* <circle id='path1' x="0" y="0" cx="100" cy="250" r="17.64" fill="blue" /> */}

                    <path className="st1" d="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250">
                        <animate
                            attributeName="d"
                            dur="25s"
                            begin="1s"
                            values="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path className="st2" d="M 0 250 C 600 100 650 450 1300 250 L 300 550 L 0 550 L 0 250">
                        <animate
                            attributeName="d"
                            dur="25s"
                            values="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
                                    M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
                            repeatCount="indefinite"
                        />
                    </path>

                </svg>
                <h1>Une <span>question</span>, un <span>projet</span> ou <span>besoin</span> d'une <span>secretaire indépendante</span> au plus vite ?</h1>
                <div className='whatsContact'>
                    <div className="containTxt">
                        <div className="call">Passez votre <span>commande</span></div>
                        <div className='mail'>secretariatlive13@gmail.com</div>
                        <div className='numberTel'>07.60.17.85.07</div>

                    </div>
                </div>
            </div>
            <div className="gsapEmail">
                <img ref={lettreRef} className='move lettre' src={Lettre} alt="lettre" />
                <img ref={lettre2Ref} className='move lettre2' src={Lettre} alt="lettre" />
                <img ref={letterRef} className='move letter' src={Letter} alt="letter" />
                <img ref={timbreRef} className='move timbre' src={Timbre} alt="timbre" />
                <img ref={timbre2Ref} className='move timbre2' src={Timbre2} alt="timbre" />
                <img ref={enveloppeRef} className='move enveloppe' src={Enveloppe} alt="enveloppe" />
                <img ref={cachetéRef} className='move cacheté' src={Cacheté} alt="enveloppe" />
                <img className='secretaire' src={BureauEmail} alt="" />
            </div>
            <div id='ancreContact' className="contactTxt">
                <span className='spanTxt'>CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI&nbsp;</span>
                <span className='spanTxt'>CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI&nbsp;</span>
            </div>
            {/* chat WHATSAPP mais pas le bot */}
            {/* <a aria-label="Chat on WhatsApp" href="https://wa.me/+33760178507"> <img alt="Chat on WhatsApp" src={WhatsAppImg} /> </a> */}
            {/* WHATSAPP */}
            <div className="containForm">
                <form className="formulaire" ref={form} onSubmit={handleSubmit(sendEmail)}>
                    {isSended && (<small className='smallSubmit'>Merci pour votre message, nous vous repondrons très vite.</small>)}
                    <label htmlFor="name">Nom <span className='etoile'>*</span></label>
                    <input name='user_name' htmlFor='name' placeholder='Nom' type="text" required
                        {...register('user_name', {
                            required: true
                        })} />
                    <label htmlFor="E-mail">E-mail <span className='etoile'>*</span></label>
                    <input name='user_email' htmlFor="E-mail" placeholder='E-mail' type="text" required
                        {...register('user_email', {
                            required: true
                        })} />
                    <label htmlFor="message">Message</label>
                    <textarea name='message' htmlFor="message" placeholder='Votre message' id="" cols="30" rows="10" required
                        {...register('message', {
                            required: true
                        })}></textarea>
                    <button type='submit' className='btnForm'>
                        ENVOYER VOTRE MESSAGE
                    </button>
                </form>

            </div>
            <div className="contactTxt">
                <span className='spanTxt'>CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI&nbsp;</span>
                <span className='spanTxt'>CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI - CONTACTEZ-MOI&nbsp;</span>
            </div>
        </div>
    )
}
