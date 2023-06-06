import React, { useEffect, useState } from "react"
import { CardListHP } from "./HomeCards/CardList";


export const Trending = () => {

    const [data, setData] = useState([]);


    useEffect( () => {
        const fetchData = async () => {
            const dataFetched = await fetch('http://localhost:5000/all');
            setData(await dataFetched.json());
          }

        fetchData();
        
    });


    return (
        <>

            <div className="trendWrap">

            <h1 style={{fontFamily: "Raleway,sans-serif"}}>Our Fighters</h1>

            <div>

                <CardListHP data={data} />

            </div>
                
            </div>

        </>
    )

}