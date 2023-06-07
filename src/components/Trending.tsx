import React, { useEffect, useState } from "react"
import { CardListHP } from "./HomeCards/CardList";
import axios from "axios";


export const Trending = () => {

    const [data, setData] = useState([]);


    useEffect( () => {
        const fetchData = async () => {

            try{

                const dataFetched = await axios.get('http://localhost:5000/all');
                setData(dataFetched.data);
            }
            catch(e){
                console.log(e);
            }
            
          }

        fetchData()
        
    },[]);


    return (
        <>

            <div className="trendWrap">

            <h1 style={{fontFamily: "Raleway,sans-serif", marginBottom:"10rem" }}>Our Fighters</h1>

            <div>

                <CardListHP data={data} />

            </div>
                
            </div>

        </>
    )

}