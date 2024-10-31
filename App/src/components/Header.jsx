import React from "react"
import Navbar from "./Navbar"
import RoundedButton from "./Button/RoundedButton"
import "../assets/styles/components/header.scss"

import imageProfile from "../assets/images/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header(){
  return(
    <header className="header">
      <div className="header-box">
        <img src={imageProfile} alt="profile" />
        <h1>Adam <br/> Grelewicz</h1>
        <div className="buttons-box">
          <RoundedButton>
            <FontAwesomeIcon icon={faGithub}/>
          </RoundedButton>
          <RoundedButton>
            <FontAwesomeIcon icon={faLinkedin}/>
          </RoundedButton>
        </div>
        <Navbar />
      </div>
    </header> 
  )
}