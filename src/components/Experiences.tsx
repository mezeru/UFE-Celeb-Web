import { useEffect, useState } from "react";
import React from "react";
import { Navbar } from "./NavBar";
import { useParams } from "react-router-dom";

export const Experiences = () => {

    const [data, setData] = useState([]);

    const { id } = useParams()

    useEffect( () => {
        const fetchData = async () => {
            const dataFetched = await fetch(`http://localhost:5000/search?id=${id}`);
            setData(await dataFetched.json());
          }

        fetchData();
        
    });



    return(

        <>
        <Navbar></Navbar>




        </>
    )

}