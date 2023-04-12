import React, { useEffect, useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Title from './components/Title/Title';
import Card from './components/Card/Card';
import Banniere from './components/Banniere/Banniere';
import How from './components/How/How';


export default function Tarifs() {

    return (
        <section className='tarifs'>
            <Title />
            <Card />
            <Banniere />
            <How />
        </section>
    )
}
