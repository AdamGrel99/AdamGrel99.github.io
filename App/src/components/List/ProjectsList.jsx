import React from "react";
import "../../assets/styles/components/list/projectsList.scss"

export default function ProjectsList({ children, ...rest }){
  return(
    <div className="projects-box" {...rest}>
      {children}
    </div>
  )
}