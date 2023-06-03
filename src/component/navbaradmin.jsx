import React from "react"
import Logo from "../assets/simasteradmin.png"
import Button from "./button.jsx"
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <nav className="bg-white flex justify-between px-0 pt-5 ml-8">
            <img src={Logo} alt="Logo"/>
            <div className="flex gap-2">
                <Link to="/admin/dashboard/room">
                    <Button>
                        Room
                    </Button>
                </Link>
                <Link to="/admin/dashboard/booking">
                    <Button>
                        User
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default navbar