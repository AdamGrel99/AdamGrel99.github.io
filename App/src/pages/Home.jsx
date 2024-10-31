import React from "react"
import imageHome from "../assets/svg/background-in-cloud-form.svg"
import "../assets/styles/pages/home.scss"

export default function Home(){
  return(
    <div className="home-image-box">
      <img src={imageHome} />
    </div>
  )
}