import React, { useEffect } from 'react'

import { gsap } from "gsap"

import portrait from '../../../imgImport/portraitAnne.png'


export default function Hey() {


     useEffect(() => {
            gsap.to('.portrait', {
                y: 1200,
                duration: 10,
                ease: 'easeInOut',
                scrollTrigger: {
                    trigger: ".flexPortrait",
                    // markers: true,
                    start: "top 10%",
                    end: "bottom 50%",
                    scrub: true,
                }
            })
        },[])

    return (
        <section className='autoBio'>
            <h1>Hey <span>les petites et moyennes entreprises</span></h1>
            <p className='pTitle'>voici ce que vous devez savoir sur moi.</p>
            <div className='flexPortrait'>
                <ol>
                    <li>
                        <h3>Le mot clé : <span>déléguez !</span></h3>
                        <p>
                            Je m'appelle Anne-Sophie et je suis là pour vous aider, vous assister. <br />
                            laissez moi la pleine gestion de votre administratif, <br />
                            Exit la charge mentale.
                        </p>
                    </li>
                    <li>
                        <h3>Le mot clé : <span>économisez !</span></h3>
                        <p>
                            Je travaille à mon compte et fait souvent le même 'taf' qu'un salarié : secretariat et gestion administrative. <br />
                            Ce qui change ? Pas de salaire, <span>mais</span> une facture de prestation de service.
                        </p>
                    </li>
                    <li>
                        <h3>Le mot clé : <span>détendez</span> <span>vous</span></h3>
                        <p>
                            Ce qui me differencie ? <br />
                            Ma bienveillance, mon côté humain.<br />
                            Je suis à l'écoute de vos besoins, polyvalante et disponible. <br />
                            Laissez moi me mettre en relation avec vos comptables, avocats, fournisseurs et même clients. <br />
                            Je vais vous faciliter la tâche.
                        </p>
                    </li>
                </ol>
                <div className='portrait'><img src={portrait} alt="portrait" /></div>
            </div>
        </section>
    )
}
