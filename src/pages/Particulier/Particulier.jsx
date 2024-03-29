import React, { useEffect } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function Particulier() {

  useEffect(() => {
    gsap.timeline().to('.toBottom li', {
      y: 0,
      // duration: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".find",
        // markers: true,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true
      }
    })
  }, [])
  useEffect(() => {
    const h2Animation = document.querySelectorAll('.h2Anim')
    const h2TL = gsap.timeline()
    h2TL.to(h2Animation, {
      y: 0,
      // duration: 0.2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".find",
        // markers: true,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true
      }
    })
  }, [])

  useEffect(() => {
    gsap.timeline().to('.txtAnim', {
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".serviceList",
            // markers: true,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true
        }
    })
}, [])

useEffect(() => {
  gsap.to('.titleServ', {
      x: 0,
      opacity: 1,
      // duration: 1,
      scrollTrigger: {
          trigger: ".titleServ",
          // markers: true,
          start: "top 80%",
          end: "bottom 100%",
          scrub: true
      }
  })
}, [])

  return (
    <div className='particulier'>
      <div className="gestion">
        <span className='spanGestion t1'>Exit - Charge mentale - Exit - Charge mentale - Exit - Charge mentale&nbsp;</span>
        <span className='spanGestion t2'>Exit - Charge mentale - Exit - Charge mentale - Exit - Charge mentale&nbsp;</span>
      </div>
      <div className="service">
        <h1 className="titleServ">Services aux <strong className='titleUp'> particuliers</strong></h1>
        <ul className="serviceList">
          <li className='liAnim'><span className='txtAnim'> <strong className='color'>Lettres</strong> personnelles, professionnelles</span></li>
          <li className='liAnim'><span className='txtAnim'> Cv <strong className='italic'>lettres de motivation</strong>, demission, disponibilité</span></li>
          <li className='liAnim'><span className='txtAnim'> <strong className="sizeDown"> Courriers et gestion des dossiers <br/> CAF SECU Pole emploi</strong> <strong className='color'>lettres de reclamation</strong></span></li>
          <li className='liAnim'><span className='txtAnim'> <strong className='color'>Recommandés</strong> ou envoi de courriers</span></li>
          <li className='liAnim'><span className='txtAnim'> <strong className='italic'>Changement d'adresse</strong></span></li>
          <li className='liAnim'><span className='txtAnim'> Organisation de votre boîte <strong className='color'>mail</strong></span></li>
          <li className='liAnim'><span className='txtAnim'> Reservation ou organisation de vos <br/> vacances ou évenements privés</span></li>
          <li className='liAnim'><span className='txtAnim'> <strong className='color'>Commandes de cadeaux fête des mères,<br/> anniversaires</strong></span></li>
          <li className='liAnim'><span className='txtAnim'> tri optimal <strong className='italic'>système d'archivage classement informatique</strong></span></li>
        </ul>
        <h2 id='more'>ETC...</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="calque_1" x="0px"
        y="0px" viewBox="0 0 1300 550" xmlSpace="preserve">

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
      </svg>
      <div className="gestion">
        <span className='spanGestion'>Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;</span>
        <span className='spanGestion'>Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;Organisation &nbsp;</span>
      </div>
      <div className='find'>
        <ul className='toBottom'>
          <li>Bien classé</li>
          <li>Bien trouvé</li>
        </ul>
        <div className="titleAnim">
          <h2 className='h2Anim'>Sur votre</h2> <h2 className='h2Anim'> <strong className='color'>bureau</strong></h2> <h2 className='h2Anim'>ou sur votre</h2> <h2 className='h2Anim'><strong className='color'>ordi</strong></h2>
        </div>
      </div>
    </div>
  )
}
