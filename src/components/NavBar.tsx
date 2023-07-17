import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {



    return (
        <>
        <div className="navBar">
            <div>

            </div>

            <div className="nav">

                <div className="navItem">
                    <a href="/" >HOME</a>
                </div>
                <div className="navItem">
                    <a href="#" >FAQ</a>
                </div>
                <div className="navItem">
                    <a href="#" >CONTACT US</a>
                </div>
                <div className="navItem">
                    <Link to={`/login`}>LOGIN</Link>
                </div>
                <div className="navItem">
                    <Link to={`/User/64b1e698ce439cd7b32eac11`}>PROFILE</Link>
                </div>
                
            </div>
        </div>
        </>
    )

}