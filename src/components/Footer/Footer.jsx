import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

function Footer() {
    return (
        <footer>
            <h1>Secretariat Live</h1>
            <div className="contain">
                <ul className="contact">
                    <li>07.60.17.85.07</li>
                    <li>secretariatlive13@gmail.com</li>
                    <li>13720 Belcodéne</li>
                </ul>
                <div className="mention">
                    Mentions légales
                </div>
            </div>
            <div className="reseau">
                <h3>Suivez nous</h3>
                <ul className="iconReseau">
                    <li><a className='instaGram' href="https://www.instagram.com/secretariatlive/"><FaInstagram /></a></li>
                    <li><a className='faceBook' href='https://www.facebook.com/Secretariatlive'><FaFacebook /></a></li>
                    <li><Link className='mail' to={'/contact#ancreContact'}><RiMailSendLine /></Link></li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer