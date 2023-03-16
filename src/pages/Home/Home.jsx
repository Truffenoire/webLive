import React from 'react'

import Arrow from './components/Arrow'
import Cards from './components/Cards'
import Movie from './components/Movie'
import Vignette from './components/Vignette'
import Hey from './components/Hey'
import TalkAbout from './components/TalkAbout'




export default function Home() {

  return (
    <div className='homeContainer'>
      <Movie />
      <Arrow />
      <Cards />
      <Vignette />
      <Hey />
      <TalkAbout />
    </div>
  )
}
