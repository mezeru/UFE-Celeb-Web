import React from "react";
import { ServCard } from "./ServCards";

export const ServCardList = ({ data }) => {

  const imglink = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.masterfile.com%2Fsearch%2Fen%2Ffighter&psig=AOvVaw3d-_BTA82xtSgq3DOUyOu_&ust=1686109069449000&source=images&cd=vfe&ved=2ahUKEwj-8K7y263_AhXwqIQIHTwXDRYQjRx6BAgAEAw";

    return (
        <>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%"}} className="grid grid-cols-2 gap-5" >
          {data?.map((e) => (
          <ServCard key={e._id} Name={e.Name} Desc={e.Description} Price={e.Price} />
      ))}
          </div>
        </>
      );

}
