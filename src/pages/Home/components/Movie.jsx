import React, { useState } from 'react'

import movieAccueil from '../../../imgImport/movieAccueil.mp4'

export default function Movie() {

  const [toggleMovie, setToggleMovie] = useState(false)

  const handleMovie = () => {
    setToggleMovie(!toggleMovie)
  }

  return (
    <div onClick={handleMovie} id={toggleMovie ? 'movieScreen' : undefined} className="movie">
      <video autostart='true' muted loop autoPlay src={movieAccueil}></video>
      <div className='redArrow'>
        <svg className='btnArrow' width="80" height="80" viewBox="0 0 337 846" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M168 846H188C198.272 736.426 226.723 695.434 336.5 675.5L332.5 636.5C267.955 643.76 236.144 659.82 188 712V0H168V846Z" fill="white" />
          <path d="M168.5 846H148.5C138.228 736.426 109.777 695.434 0 675.5L4 636.5C68.5447 643.76 100.356 659.82 148.5 712V0H168.5V846Z" fill="white" />
        </svg>
      </div>
    </div>

  )
}
