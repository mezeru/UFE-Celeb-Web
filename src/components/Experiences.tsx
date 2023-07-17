import { useEffect, useState } from "react";
import React from "react";
import { Navbar } from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FighterCard } from "./Services/Fightercard";
import { ServCardList } from "./Services/ServCardList";
import { ServCard } from "./Services/ServCards";

export const Experiences = () => {

    const [data, setData] = useState();

    const { id } = useParams()

    useEffect( () => {
        const fetchData = async () => {
            const dataFetched = await axios.get(`http://localhost:5000/search?id=${id}`);
            setData(dataFetched.data);
          }

        fetchData().catch(e => console.log(e));
        
    },[]);

    return(

        <>

        {data && <FighterCard Name={data?.Name} Gender={data?.Gender} />}

        <div>

        {data && <ServCardList data={data.Services} />}

        </div>

        <div>

        </div>


        </>
    )

}