import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import "../assets/styles/components/layout.scss"
import Optionbar from "./Optionbar"

export default function Layout(){
  return(
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Optionbar />
    </div>
  )
}