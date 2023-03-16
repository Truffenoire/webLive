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
        </div>

    )
}
