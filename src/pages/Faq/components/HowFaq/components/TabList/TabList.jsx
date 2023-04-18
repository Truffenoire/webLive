import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function TabList() {

  const liRef = useRef([])

  useEffect(() => {
    if(liRef.current.length === 11){
      console.log(liRef.current)
      const liTL = gsap.timeline()
      liTL
      .to(liRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.2
      })

      ScrollTrigger.create({
        trigger: '.exit',
        // markers: true,
        start: 'top 50%',
        end: 'bottom 10%',
        // scrub: true,
        animation: liTL,
    })
    }
  },[])


  return (
    <div className='tabList'>
      <ul>
        <li><span>RECRUTEMENT :</span> temps passé à la réalisation des annonces, le traitement des CV, les frais liés à l’intégration du salarié… Difficilement calculable, mais un gros budget tout de même</li>
        <li><span>IMMOBILIER :</span> un espace de travail adapté et aux normes</li>
        <li><span>MOBILIER, FOURNITURES :</span> consommables, internet, bureau, matériel informatique professionnel…</li>
        <li><span>FORMATION :</span> l’absence et le coût que cela engendre</li>
        <li>13EME MOIS</li>
        <li>TICKETS RESTAURANT</li>
        <li>INTERESSEMENT...</li>
      </ul>
      <div className='exit'>
        <ul className='salaire'>
        <h2>Exit les charges salariales:</h2>
        <p>Les charges salariales représentent 22 % du salaire brut. Elles sont déduites de la rémunération et redistribuées aux caisses suivantes :</p>
          <li ref={(el) => liRef.current[0] = el} >CSG</li>
          <li ref={(el) => liRef.current[1] = el} >CRDS</li>
          <li ref={(el) => liRef.current[2] = el} >Vieillesse</li>
          <li ref={(el) => liRef.current[3] = el} >Chômage</li>
          <li ref={(el) => liRef.current[4] = el} >retraite</li>
        </ul>
        <ul className='patron'>
        <h2>Exit les charges patronnales:</h2>
        <p>Les charges patronales représentent 42 % du salaire brut. Elles sont payables par l’employeur en supplément du salaire net :</p>
          <li ref={(el) => liRef.current[5] = el} >Maladie</li>
          <li ref={(el) => liRef.current[6] = el} >CSA</li>
          <li ref={(el) => liRef.current[7] = el} >Allocation familiales</li>
          <li ref={(el) => liRef.current[8] = el} >Chômage</li>
          <li ref={(el) => liRef.current[9] = el} >Retraite complémentaire</li>
          <li ref={(el) => liRef.current[10] = el} >Formation professionnelle</li>
        </ul>
      </div>
    </div>
  )
}
