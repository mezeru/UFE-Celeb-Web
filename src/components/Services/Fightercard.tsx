import React from "react";

export const FighterCard = ({Name, Gender}) => {

    return(

        <>

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        {Name}
      </p>
      <p className="text-gray-500 text-lg">
       {Gender}
      </p>
    </div>


        </>
    )

}