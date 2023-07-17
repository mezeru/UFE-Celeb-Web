import React from "react"
import { Navbar } from "./NavBar"
import { Trending } from "./Trending"

const heroImg = require('../assets/heroImg.png')

export const Home = () => {

    return (
        <>
        <div className="Home">

            <div className="heroImg" >
                <img src={ heroImg } ></img>
            </div>

            <Trending></Trending>

        </div>
        </>
    )

};