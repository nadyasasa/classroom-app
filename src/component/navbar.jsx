import React from "react"
import Logo from "../assets/simaster.png";

const navbar = () => {
    return (
        <div className="bg-white flex justify-between px-0 pt-5 ml-8">
            <img src={Logo} alt="Logo"/>
        </div>
    )
}

export default navbar