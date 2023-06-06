import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ title, img, id }) => {

    return (
        <>
          <div style={{margin: "1%"}}>
          <Link to={`/services/${id}`}>
            <div className="card">
              <p style={{textAlign: "center", fontSize: "1.25rem", fontFamily: "Red Hat Display,Arial,Helvetica,sans-serif"}} >{title}</p>

            </div>   
          </Link>  
          </div>
        </>
      );

}