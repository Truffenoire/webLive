import React, { useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

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

    return (
        <div className='entreprise'>
            <div className="gestion">
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
                <span className='spanGestion'>Gestion de</span>
            </div>
            <div className="gestionEtsList">
                <h1 className='title'>Entreprise</h1>
                <ul className='listAnim'>
                    <li className='liAnim'><span className='txtAnim'><strong>Factures, devis, bon de commande</strong> : saisie, envoi, traitement</span></li>
                    <li className='liAnim'><span className='txtAnim'>Relance impayés</span></li>
                    <li className='liAnim'><span className='txtAnim'>Tableau de suivi des dépenses</span></li>
                    <li className='liAnim'><span className='txtAnim'>Commandes auprès des fournisseurs</span></li>
                    <li className='liAnim'><span className='txtAnim'>Classeurs de chantiers (documents, affichages obligatoires)</span></li>
                    <li className='liAnim'><span className='txtAnim'>Réservations et gestion des déplacements</span></li>
                    <li className='liAnim'><span className='txtAnim'>Gestion flotte automobile</span></li>
                    <li className='liAnim'><span className='txtAnim'>Démarches Administratives</span></li>
                    <li className='liAnim'><span className='txtAnim'>Organisations de réunions</span></li>
                    <li className='liAnim'><span className='txtAnim'>Gestion de la communication interne et externe</span></li>
                    <li className='liAnim'><span className='txtAnim'>Créations de cartes de voeux, plaquettes, flyers</span></li>
                </ul>
            </div>
            <div className="gestion">
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
                <span className='spanGestion'>Gestion du</span>
            </div>
            <div className="gestionPersList">
                <h1 className='title'>Personnel</h1>
                <ul className='persAnim'>
                    <li className='li2Anim'><span className='txt2Anim'>DUE / Contrats de travail</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Visites médicales</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Congés / Arrêt maladies</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Etablissement de plannings</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Carte C.I.B.T.P</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Notes de frais</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Aide au recrutement (tri CV, réponses candidats, fiches de poste)</span></li>
                    <li className='li2Anim'><span className='txt2Anim'>Organisation des déplacements (billets, hôtels, séjours entiers)</span></li>
                </ul>
            </div>
            <div className="gestion">
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
                <span className='spanGestion'>Gestion</span>
            </div>
            <div className="gestionAdList">
                <h1 className='title'>Administrative</h1>
                <ul className='adAnim'>
                    <li className='li3Anim'><span className='txt3Anim'>Création de comptes en ligne (E.D.F, impots, fournisseurs)</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Traitement mails</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Courriers / Documents : saisie, envoi</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Envois recommandés</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Tableaux excel</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Traitements des appels</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion d'agenda</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion des fournitures</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion archives numériques</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Relection, corrections</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Permanence téléphonique</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Transcription écrite des audio (compte rendu, courriers)</span></li>
                    <li className='li3Anim'><span className='txt3Anim'>Gestion pré-comptable</span></li>
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
                    <li>Bien classé</li>
                    <li>Bien trouvé</li>
                </ul>
                <h2>Sur votre bureau ou sur votre ordi</h2>
            </div>
        </div>
    )
}