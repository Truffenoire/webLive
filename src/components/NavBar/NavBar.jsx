import React, { useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
// import { Player, Controls } from '@lottiefiles/react-lottie-player'
// import { gsap } from 'gsap'

import { AiFillCloseCircle } from "react-icons/ai";
import Logo from '../../imgImport/logoPetit.png'

export default function NavBar() {

  const ref = useRef(null)

  const [hideMenu, setHideMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [showSousMenu, setShowSousMenu] = useState(false)
  // EFFET YOYO SUR LE MENU
  // useEffect(() => {
  //   if(ref){
  //   let tl = gsap.timeline();
  //   tl.set(ref.current, {x:0, y:0, scale:1})
  //   tl.to(ref.current, { duration: 1, x: 5, yoyo: true, repeat: -1 })
  //   tl.to(ref.current, { duration: 1, y: 5, yoyo: true, repeat: -1 })
  //   }
  // }, [])

  const handleMenu = (e) => {
    e.preventDefault()
    setHideMenu(!hideMenu)
    console.log("hideMenu", hideMenu);
    if (showMenu) {
      // gsap.to(ref.current, { duration: 0.4, x:-300, y:350, scale:8, opacity:0, color: 'orange'})
      setShowMenu(!showMenu)
      console.log('showMenu', showMenu);
    }
    // console.log(ref);
  }
  const handleShowMenu = (e) => {
    e.preventDefault()
    setHideMenu(!hideMenu)
    setShowMenu(!showMenu)
    setShowSousMenu(false)
    // gsap.to(ref.current, {duration:0.3, opacity:1, scale:1, color: '#0a0affa6'})


  }
  const handleSousMenu = () => {
    setShowSousMenu(!showSousMenu)
    console.log('showSousMenu', showSousMenu);
  }

  return (

    <div className='navBarContainer'>
      <div id='ancre' className='logoContainer'><img src={Logo} alt="" /></div>
      <button ref={ref} className='btnMenu' onClick={handleMenu}> MENU </button>
      {hideMenu ?
        <nav className='nav'>
          <div className='imgLogo'>
            <div className='menuFooter'>
              <img src={Logo} alt="logo" />
              <ul className='lienReseau'>
                <li>+ Instagram</li>
                <li>+ FaceBook</li>
                <li>+ LinkedIn</li>
              </ul>
              <ul className='email'>
                <li><strong>secretariatlive13@gmail.com</strong></li>
              </ul>
            </div>

            <ul className='menuLink'>
              {/* JE PEUX PASSER UNE FONCTION QUI FAIT DEUX CHOSES */}
              <li onClick={handleShowMenu}><Link to={'/#ancre'} >ACCUEIL</Link></li>
              <li><Link onClick={handleSousMenu}>SERVICES</Link></li>
              {showSousMenu && 

              <div id={`${showSousMenu && "growUp" }`}>
                <ul>
                  <li><Link>Entreprises</Link></li>
                  <li><Link>Particuliers</Link></li>
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
