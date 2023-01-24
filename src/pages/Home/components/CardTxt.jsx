import React, {useEffect} from 'react';
import assistante from '../../../imgImport/assistante.jpeg'
import economies from '../../../imgImport/why.jpeg'

import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin( ScrollTrigger, ScrollToPlugin )

const CardTxt = () => {

    useEffect(() => {
        gsap.fromTo(".slideFromLeft",
            {
                x:-100, opacity: 0, stagger: 0.5,
            }, 
            {
                x: 0, opacity: 1, stagger: 0.5,
                scrollTrigger: {
                    trigger:".slideFromLeft",
                }
            }
        )
    }, []); 

    useEffect(() => {
        gsap.fromTo(".slideFromRight",
            {
                x:-100, opacity: 0, stagger: 0.5,
            }, 
            {
                x: 0, opacity: 1, stagger: 0.5,
                scrollTrigger: {
                    trigger:".slideFromRight",
                }
            }
        )
    }, []); 

    return (
        <div className='cardTxt'>
            <div className="border img1"><img src={assistante} alt="assistante" /></div>
            <div className="cardListTxt txt2">
                <h2>Une assistante indépendante ?</h2>
                <ul>
                    <li className='slideFromLeft'>Elle travaille à son compte pour differents clients, souvent à distance.</li>
                    <li className='slideFromLeft'>Elle effectue souvent le même travail qu'un salarié : <br></br> secretariat et gestion administrative.</li>
                    <li className='slideFromLeft'>Pas de salaire mais une facture de prestation de service.</li>
                </ul>
            </div>
            <div className="cardListTxt txt4">
                <h2 className='h2ListTwo'>Pourquoi ?</h2>
                <ul>
                    <li className='slideFromRight'>Terminé les frais et charges salariales.</li>
                    <li className='slideFromRight'>Vous n'êtes pas engagés par un contrat de travail.</li>
                    <li className='slideFromRight'>Pallier a une surcharge de travail temporaire.</li>
                    <li className='slideFromRight'>Combler l'absence de votre secrétaire en congés ou malade.</li>
                </ul>
            </div>
            <div className="border img3"><img src={economies} alt="economies" /></div>

        </div>
    );
};

export default CardTxt;