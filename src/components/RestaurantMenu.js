import { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {

    const { resId } = useParams();
    

    //custom hook call
    const resInfo = useRestaurantMenu(resId);
   if(resInfo==null){
       return <h1>Restuarant Not Found</h1>;
   }
    return (
        <div className="menu">
            <img className="image" src={CDN_URL+resInfo.cloudinaryImageId} />
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisines.join(", ")}</h2>
            <h3>{resInfo.costForTwo}</h3>
            <h3>{resInfo.locality}</h3>
            <h3>{resInfo.areaName}</h3>
        </div>
    )
}

export default RestaurantMenu;