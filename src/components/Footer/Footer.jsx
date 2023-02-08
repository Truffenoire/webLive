import React, {useEffect, useRef} from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";



function Footer({isCharged, setIsCharged}) {


    const handleClik = () => {
        setIsCharged(!isCharged)
        console.log(isCharged);
    }
    const h1Ref = useRef(null)

    useEffect(() => {
        gsap.timeline().to('.h1Anim span', {
            y: 0,
            color: '#a6cfd5',
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "footer",
                // markers: true,
                start: "top 600px",
                end: "bottom bottom",
                scrub: true
            }
        })
    },[isCharged])

    // console.log('isCharged',isCharged);
    // console.log('h1ref',h1Ref);

    return (
        <footer className='footerAnim'>
            <h1 className='h1Anim' ref={h1Ref}>
                <span>S</span>
                <span>e</span>
                <span>c</span>
                <span>r</span>
                <span>e</span>
                <span>t</span>
                <span>a</span>
                <span>r</span>
                <span>i</span>
                <span>a</span>
                <span>t</span>
                <span>L</span>
                <span>i</span>
                <span>v</span>
                <span>e</span>
            </h1>
            <div className="contain">
                <ul className="contact">
                    <li>07.60.17.85.07</li>
                    <li>secretariatlive13@gmail.com</li>
                    <li>13720 Belcodéne</li>
                </ul>
                <div className="mention">
                    Mentions légales <br/>
                    CGV et RGPD
                </div>
            </div>
            <div className="reseau">
                <h3>Suivez nous</h3>
                <ul className="iconReseau">
                    <li><a className='instaGram' href="https://www.instagram.com/secretariatlive/"><FaInstagram /></a></li>
                    <li><a className='faceBook' href='https://www.facebook.com/Secretariatlive'><FaFacebook /></a></li>
                    <li><Link className='mail' to={'/contact#ancreContact'}><RiMailSendLine /></Link></li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer