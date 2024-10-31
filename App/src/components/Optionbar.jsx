import React from "react";
import RoundedButton from "./Button/RoundedButton";

import "../assets/styles/components/optionbar.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function Optionbar(){
  return(
    <div className="option-box">
      <RoundedButton>
        <FontAwesomeIcon icon={faMoon} />
      </RoundedButton>
      <RoundedButton>
        <FontAwesomeIcon icon={faLanguage} />
      </RoundedButton>
    </div>
  )
}