import React from "react"

import "../../assets/styles/pages/projects.scss"

import ProjectsList from "../../components/List/ProjectsList"
import ProjectElement from "../../components/List/ProjectElement"

// kontener na projekty

export default function Projects(){
  return(
    <div className="projects-container">
      <h1>Projekty</h1>
      <p>
        Poniżej znajdziesz kilka projektów, nad którymi pracowałem w ostatnim czasie. 
        Wszystkie moje projekty są dostępne na moim koncie na GitHubie, gdzie znajdziesz 
        pełne kody źródłowe oraz więcej szczegółów na temat każdego z projektów. Moje portfolio 
        odzwierciedla moje pasje i umiejętności w dziedzinie programowania, a każdy projekt jest 
        rezultatem ciężkiej pracy i zaangażowania.
      </p>
      <ProjectsList>
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </ProjectsList>
    </div>
  )
}