import React, { useEffect, useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";



function Footer({ isCharged, setIsCharged }) {


    const handleClik = () => {
        setIsCharged(!isCharged)
        console.log(isCharged);
    }
    const location = useLocation()
    const h1Ref = useRef(null)

    useEffect(() => {
        const h1Animate = h1Ref.current.children
        const footTL = gsap.timeline();

        footTL.to(h1Animate, {
            y: 0,
            color: '#a6cfd5',
            duration: 0.8,
            stagger: 0.3,
        })

        ScrollTrigger.create({
            trigger: "footer",
            scrub: true,
            start: "top 90%",
            end: "bottom 100%",
            animation: footTL,
        })
        // gsap.timeline().to('.h1Anim span', {
        //     y: 0,
        //     color: '#a6cfd5',
        //     duration: 0.8,
        //     stagger: 0.3,
        //     scrollTrigger: {
        //         trigger: "footer",
        //         // markers: true,
        //         start: "top 90%",
        //         end: "bottom 100%",
        //         scrub: true
        //     }
        // })

    },[isCharged, location.pathname])

    // useEffect(() => {
    //     const element = h1Ref.current.children || document.querySelectorAll('.h1Anim span');
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.footerAnim',
    //             start: "top 90%",
    //             end: "bottom 100%",
    //             scrub: true,
    //         },
    //     });
    //     tl.to(element, {
    //         y: 0,
    //         color: '#a6cfd5',
    //         duration: 0.8,
    //         stagger: 0.3,
    //     });
    //     console.log(element);
    // }, [location.pathname, isCharged]);
  
    


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
                    Mentions légales <br />
                    <Link to={'/RGPD#ancre'}>CGV et RGPD</Link>
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