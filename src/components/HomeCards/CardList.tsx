import React from "react";

import { Cards } from "./Cards";

export const CardListHP = ({ data }) => {

  const imglink = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.masterfile.com%2Fsearch%2Fen%2Ffighter&psig=AOvVaw3d-_BTA82xtSgq3DOUyOu_&ust=1686109069449000&source=images&cd=vfe&ved=2ahUKEwj-8K7y263_AhXwqIQIHTwXDRYQjRx6BAgAEAw";

    return (
        <>
          <div className="grid grid-cols-3 gap-10 justify-items-center mx-12 " >
          {data.map((e) => (
          <Cards key={e._id} title={e.Name} desc={e.Description} img={imglink} id={e._id} />
      ))}
          </div>
        </>
      );

}
