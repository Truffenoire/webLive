import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home";
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Entreprise from "./pages/Entreprise/Entreprise";
import Particulier from "./pages/Particulier/Particulier";

function App() {
  return (
    <div className="App">
      {/* <div className="loader"></div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/particulier" element={<Particulier />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
