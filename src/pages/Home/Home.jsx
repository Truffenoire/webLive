import React from 'react'
import { useEffect } from 'react'
import CardTxt from './components/CardTxt'
import TextAnime from './components/TextAnime'

import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Home() {

  return (
    <div className='homeContainer'>
      <TextAnime />
      <CardTxt />
    </div>
  )
}
