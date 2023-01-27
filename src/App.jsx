import { useState} from "react";
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home";
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Entreprise from "./pages/Entreprise/Entreprise";
import Particulier from "./pages/Particulier/Particulier";
import { useEffect } from "react";

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


function App() {

  const [ isCharged, setIsCharged ] = useState(false)

  return (
    <div className="App">
      {/* <div className="loader"></div> */}
      <NavBar isCharged={isCharged} setIsCharged={setIsCharged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/particulier" element={<Particulier />} />
      </Routes>
      <Footer isCharged={isCharged} setIsCharged={setIsCharged}/>
    </div>
  );
}

export default App;
