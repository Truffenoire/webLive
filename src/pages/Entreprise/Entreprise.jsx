import React, { useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default function Entreprise() {

    useEffect(() => {
        gsap.timeline().to('.txtAnim', {
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".listAnim",
                // markers: true,
                start: "top 700px",
                end: "bottom 300px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.txt2Anim', {
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".persAnim",
                // markers: true,
                start: "top 700px",
                end: "bottom 300px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.txt3Anim', {
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".adAnim",
                // markers: true,
                start: "top 700px",
                end: "bottom 300px",
                scrub: true
            }
        })
    }, [])
    // animation li bas de page
    useEffect(() => {
        gsap.timeline().to('.toBottom li', {
            y: 0,
            duration: 0.2,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".find",
                // markers: true,
                start: "top 600px",
                end: "bottom 500px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.h2Anim', {
            y: 0,
            duration: 0.2,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".find",
                // markers: true,
                start: "top 600px",
                end: "bottom 500px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.gestionPersList .titleAnim', {
            x: 0,
            duration: 0.2,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".titleAnim",
                // markers: true,
                start: "top 600px",
                end: "bottom 500px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.gestionAdList .titleAnim2', {
            rotateX: 0,
            duration: 0.2,
            // stagger: 0.1,
            scrollTrigger: {
                trigger: ".titleAnim2",
                // markers: true,
                start: "top 600px",
                end: "bottom 500px",
                scrub: true
            }
        })
    }, [])
    useEffect(() => {
        gsap.timeline().to('.gestionEtsList .title span', {
            y: 0,
            duration: 0.2,
            stagger: 0,
            // scrollTrigger: {
            //     trigger: ".titleAnim2",
            //     // markers: true,
            //     start: "top 600px",
            //     end: "bottom 500px",
            //     scrub: true
            // }
        })
    }, [])

    return (
        <div className='entreprise'>
            <div className="gestion">
                <span className='spanGestion'>Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;</span>
                <span className='spanGestion'>Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;Gestion de&nbsp;</span>
            </div>
            <div className="gestionEtsList">
                <h1 className='title'>
                    <span>L</span>
                    <span>'</span>
                    <span>e</span>
                    <span>n</span>
                    <span>t</span>
                    <span>r</span>
                    <span>e</span>
                    <span>p</span>
                    <span>r</span>
                    <span>i</span>
                    <span>s</span>
                    <span>e</span>
                </h1>
                <ul className='listAnim'>
                    <li className='liAnim'><span className='txtAnim'><strong className='color sizeUp'>Factures, devis, bon de commande</strong> : <strong className='sizeDown'>saisie, envoi</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'><strong className='sizeUp'>Relance impay??s</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'>Tableau de suivi des <strong className='color sizeDown'>d??penses</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'>Commandes <strong className='color sizeUp'>fournisseurs</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'>Classeurs de chantiers documents, affichages obligatoires</span></li>
                    <li className='liAnim'><span className='txtAnim'><strong className='color'>Gestion</strong><strong className='sizeUp'> flotte </strong><strong className='color'>automobile</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'><strong className='color sizeUp'>D??marches</strong><strong className='sizeDown'> Administratives</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'>Organisations de <strong className='color'>r??unions</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'><strong className='color'>Gestion de la communication interne et externe</strong></span></li>
                    <li className='liAnim'><span className='txtAnim'><strong className='sizeDown'>Cr??ations</strong> de cartes de voeux, plaquettes, flyers</span></li>
                    <li className='liAnim'><span className='txtAnim'>Cr??ation contenu <strong className='color'>FB Instagram Linked'in</strong></span></li>
                </ul>
            </div>
            <div className="gestion">
                <span className='spanGestion'>Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;</span>
                <span className='spanGestion'>Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;Gestion du&nbsp;</span>
            </div>
            <div className="gestionPersList">
                <h1 className='titleAnim'>Personnel</h1>
                <ul className='persAnim'>
                    <li className='li2Anim'><span className='txt2Anim'>DUE / <strong className='color'>Contrats</strong> de travail</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Visites <strong className='color'>m??dicales</strong></span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Cong??s / Arr??t <strong className='color'>maladies</strong></span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Etablissement de <strong className='color'>plannings</strong></span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Carte <strong className='color'>C.I.B.T.P</strong></span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Notes de <strong className='color'>frais</strong></span></li>
                    <li className='li2Anim'><span className='txt2Anim'><strong className='color'>Aide</strong> au recrutement (tri CV, r??ponses candidats, fiches de poste)</span></li>
                    <li className='li2Anim'><span className='txt2Anim'><strong className='color'>Organisation des d??placements</strong> (billets, h??tels, s??jours entiers)</span></li>
                </ul>
            </div>
            <div className="gestion">
                <span className='spanGestion'>Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;</span>
                <span className='spanGestion'>Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;Gestion&nbsp;</span>
            </div>
            <div className="gestionAdList">
                <h1 className='titleAnim2'>Administrative</h1>
                <ul className='adAnim'>
                    <li className='li3Anim'><span className='txt3Anim'><strong className='color'>Cr??ation de comptes</strong> en ligne (E.D.F, impots, fournisseurs)</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Traitement <strong className='color'>mails</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'><strong className='color'>Courriers / Documents</strong> : saisie, envoi</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Envois <strong className='color'>recommand??s</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Tableaux <strong className='color'>excel</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Traitements des <strong className='color'>appels</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion d'<strong className='color'>agenda</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion des <strong className='color'>fournitures</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion <strong className='color'>archives num??riques</strong></span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Relection, corrections</span></li>
                    <li className='li3Anim'><span className='txt3Anim'><strong className='color'>Permanence</strong> t??l??phonique</span></li>
                    <li className='li3Anim'><span className='txt3Anim'><strong className='color'>Transcription</strong> ??crite des audio (compte rendu, courriers)</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion <strong className='color'>pr??-comptable</strong></span></li>
                </ul>
            </div>
            <div className="gestion">
                <span className='spanGestion'>Organisation</span>
                <span className='spanGestion grow'>Organisation</span>
                <span className='spanGestion'>Organisation</span>
                <span className='spanGestion grow'>Organisation</span>
                <span className='spanGestion'>Organisation</span>
                <span className='spanGestion grow'>Organisation</span>
                <span className='spanGestion'>Organisation</span>
                <span className='spanGestion grow'>Organisation</span>
            </div>
            <div className='find'>
                <ul className='toBottom'>
                    <li>Bien class??</li>
                    <li>Bien trouv??</li>
                </ul>
                <div className="titleAnim">
                    <h2 className='h2Anim'>Sur votre</h2> <h2 className='h2Anim'> <strong className='color'>bureau</strong></h2> <h2 className='h2Anim'>ou sur votre</h2> <h2 className='h2Anim'><strong className='color'>ordi</strong></h2>
                </div>
            </div>
        </div>
    )
}