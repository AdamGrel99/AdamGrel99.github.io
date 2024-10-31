import React from "react"
import { NavLink } from "react-router-dom"

import "../assets/styles/components/navbar.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMedal, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
  return(
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        <FontAwesomeIcon icon={faHouse} className="icon-spacing" />
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className="nav-link"
      >
        <FontAwesomeIcon icon={faBriefcase} className="icon-spacing" />
        Projekty
      </NavLink>
      <NavLink
        to="/skills"
        className="nav-link"
      >
        <FontAwesomeIcon icon={faMedal} className="icon-spacing" />
        Umiejętności
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        <FontAwesomeIcon icon={faUser} className="icon-spacing" />
        O mnie
      </NavLink>
    </nav>
  )
}