import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ title, img, id, desc }) => {

    return (
        <>
          
          <div
            className="m-5 flex flex-row w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{width:"500px"}}>
              <Link to={`/services/${id}`}>
                <div className="grid grid-cols-2">
                  <img
                    className="h-96 w-full rounded-lg object-cover md:rounded-none md:rounded-l-lg"
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                  <div className="grid grid-rows-2 p-6">
                    
                    <h5
                      className="mb-2 text-3xl uppercase font-medium text-neutral-800 dark:text-neutral-50">
                      {title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" style={{wordBreak:"break-word"}}>
                      {desc}
                    </p>
                  </div>
              </div>
            </Link>
          </div>

        </>
      );

}