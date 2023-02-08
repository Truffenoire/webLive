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

  const changeWord = ['non', 'oui', 'sisi']
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(changeWord[0])



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
          <li>Secretariat Live</li>
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
              {!on ? <img src={Cool} alt='cool emoji' /> : <img src={Dead} alt="dead emoji"/>}
            </animated.div>
            {/* <svg onClick={() => setActive(!active)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100px" height="100px" fill={'none'}>
              <animated.path
                d={x.to({
                  range: [0, 1],
                  output: [
                    // "M101 2L51.7143 28.1905L1 2L30.2857 102L70.2857 102L101 2Z",
                    // "M62.625 67.8721L75.5315 25.8509C80.4971 9.68367 63.4265 -4.41021 48.4917 3.52619C42.9944 6.44742 36.3328 6.44422 30.8016 3.58775C15.2017 -4.46855 -2.83214 9.89039 2.10241 26.7401L14.0747 67.6211C16.5707 76.1439 24.3878 82 33.2685 82H43.5064C52.2902 82 60.046 76.2688 62.625 67.8721Z",
                  ],
                })}
              stroke={'black'}/>
            </svg> */}
          </li>
        </ul>
      </div>
      <button ref={refBtnMenu} className='btnMenu' onClick={handleMenu}> MENU </button>
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
