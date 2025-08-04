import { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import resObj from "../utils/mockData.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const dummy="Dummy Data";
    

    //custom hook call
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex ] = useState(null);
   if(resInfo==null){
       return <h1>Restuarant Not Found</h1>;
   }
    return (
        <div className=" text-center menu">
            <img className="mx-auto h-[250px] w-[250px] m-3 rounded-2xl" src={CDN_URL+resInfo.cloudinaryImageId} />
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisines.slice(0, 3).join(", ")}</h2>
            <h3>{resInfo.costForTwo}</h3>
            <h3>{resInfo.locality}</h3>
            <h3>{resInfo.areaName}</h3>
            <h2>Accordion</h2>

            {
            resObj.map((category, index) => (
                <RestaurantCategory 
                key={category.id} 
                data={category} 
                showItems={index === showIndex ? true : false} 
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}

                />
            ))}
        </div>
    )
}




export default RestaurantMenu;