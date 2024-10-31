import React from "react";
import "../../assets/styles/components/list/projectElement.scss"

export default function ProjectElement(){
  return(
    <div className="project-element">
      <div className="content">
        <h2>Tytuł projektu</h2>
        <p>Krótki opis projektu</p>
      </div>
    </div>
  )
}