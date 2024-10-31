import React from "react"
import "../../assets/styles/components/button/roundedButton.scss"

export default function RoundedButton({children, ...rest}){
  return(
    <button className="rounded-button" {...rest}>
      {children}
    </button>
  )
}