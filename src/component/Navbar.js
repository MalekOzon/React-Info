import React from "react"
import logo from "../images/logo.png"
import  "../style.css"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="sora" className="nav--icon" />
            <h3 className="nav--logo-text" >React Facts</h3>
            <h4 className="nav--title" >React Course - Project1  </h4>
        </nav>
    )
}