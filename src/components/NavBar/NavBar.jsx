import React, { useEffect, useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import { animated, useSpring, config } from '@react-spring/web';
// import { gsap } from 'gsap'

import { AiFillCloseCircle } from "react-icons/ai";
import Logo from '../../imgImport/logoPetit.png'

import Cool from '../../imgImport/Group1.svg'
import Dead from '../../imgImport/Group3.svg'


export default function NavBar({ isCharged, setIsCharged }) {

  const refBtnMenu = useRef(null)

  const [hideMenu, setHideMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [showSousMenu, setShowSousMenu] = useState(false)
  

  const handleMenu = (e) => {
    e.preventDefault()
    setHideMenu(!hideMenu)
    console.log("hideMenu", hideMenu);
    if (showMenu) {
      setShowMenu(!showMenu)
      console.log('showMenu', showMenu);
    }
  }
  const handleShowMenu = (e) => {
    e.preventDefault()
    setHideMenu(!hideMenu)
    setShowMenu(!showMenu)
    setShowSousMenu(false)
    setIsCharged(!isCharged)


  }
  const handleSousMenu = () => {
    setShowSousMenu(!showSousMenu)
    console.log('showSousMenu', showSousMenu);
  }

  const [on, toggle] = useState(false)

  const { x, factor } = useSpring({
    from: { x: 0 },
    x: on ? 1 : 0,
    config: { duration: 500 },
  })
  useEffect(() => {
    const id = setTimeout(() => {
      toggle(!on);
    }, 2000);

    return () => clearTimeout(id);
  }, [on]);

  useEffect(() => {
    toggle(true);
  }, []);

  return (

    <div className='navBarContainer'>
      {/* <div id='ancre' className='logoContainer'><img src={Logo} alt="logo" /> */}
      <div id='ancre' className='headerContainer'>
        <ul>
          <li><Link to={'/#ancre'}>Secrétariat Live</Link></li>
          <li id='contentWord'></li>
          <li className='animate'>
            <animated.div style={{
              rotate: x.to({
                range: [0, 1],
                output: [0, 360]
              }),
              opacity: x.to({
                range: [0, .25, .5, 1],
                output: [1, 0.2, 0.2, 1]
              })
            }}>
              {!on ? <img src={Cool} alt='cool emoji' /> : <img src={Dead} alt="dead emoji" />}
            </animated.div>
          </li>
        </ul>
        {/* <div onClick={handleMovie} id={toggleMovie ? 'movieScreen' : ''} className="movie">
          <video autostart muted loop autoPlay src={movieAccueil}></video>
        </div> */}
      </div>
      <button ref={refBtnMenu} className='btnMenu' onClick={handleMenu}> MENU </button>
      {hideMenu ?
        <nav className='nav'>
          <div className='imgLogo'>
            <div className='menuFooter'>
              <img src={Logo} alt="logo" />
              <ul className='lienReseau'>
                <li><Link to={'https://www.instagram.com/secretariatlive/'}  target='_blank' >+ Instagram</Link></li>
                <li><Link to={'https://www.facebook.com/Secretariatlive'} target='_blank'>+ FaceBook</Link></li>
                <li><Link to={'https://www.linkedin.com/in/anne-sophie-philippe-52930b211/'} target='_blank'>+ LinkedIn</Link></li>
              </ul>
              <ul className='email'>
                <li onClick={handleShowMenu}><Link to={'/contact#ancre'}><strong>secretariatlive13@gmail.com</strong></Link></li>
              </ul>
            </div>

            <ul className='menuLink'>
              {/* JE PEUX PASSER UNE FONCTION QUI FAIT DEUX CHOSES */}
              <li onClick={handleShowMenu}><Link to={'/#ancre'} >ACCUEIL</Link></li>
              <li><Link onClick={handleSousMenu}>SERVICES</Link></li>
              {showSousMenu &&

                <div id={`${showSousMenu && "growUp"}`}>
                  <ul>
                    <li onClick={handleShowMenu}><Link to={'/entreprise#ancre'}>Entreprises</Link></li>
                    <li onClick={handleShowMenu}><Link to={'/particulier#ancre'}>Particuliers</Link></li>
                  </ul>
                </div>


              }
              <li onClick={handleShowMenu}><Link to={'/tarifs#ancre'}>TARIFS</Link></li>
              <li onClick={handleShowMenu}><Link to={'/contact#ancre'}>CONTACT</Link></li>
              <li onClick={handleShowMenu}><Link to={'/faq#ancre'}>FAQ</Link></li>
            </ul>
            <button className='closeMenu' onClick={handleShowMenu}>< AiFillCloseCircle /></button>
          </div>
        </nav>

        :

        null
      }
    </div>

  )
}
