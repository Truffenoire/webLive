import React from 'react'
import CardTxt from './components/CardTxt'
import TextAnime from './components/TextAnime'

export default function Home() {
  return (
    <div className='homeContainer'>
      <TextAnime />
      <CardTxt />
    </div>
  )
}
