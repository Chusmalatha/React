import { useState } from "react";
import resObj from "../utils/mockData";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const index = resObj.findIndex((item) => item.id === resId);
    const { name, cuisines, cloudinaryImageId, costForTwo, locality, areaName } = resObj[index];
    return (
        <div className="menu">
            <img className="image" src={CDN_URL+cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwo}</h3>
            <h3>{locality}</h3>
            <h3>{areaName}</h3>
        </div>
    )
}

export default RestaurantMenu;