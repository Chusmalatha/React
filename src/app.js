/**
# Food APP
* Header
  ->Logo
  ->Nav Items
* Body
  ->Search
  ->RestaurantContainer
    ->RestaurantCard
        Img
        Name of the res, star rating, cuisine, delivery time
* Footer
  ->Copyright
  ->Links
  ->Address
  ->Contacts
  */

import Header from "./components/Header.js";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard.js";
import React from "react";
import {createRoot} from "react-dom/client";


const RestaurantCard =(props) => {
    const{resData}=props;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={ + resData.cloudinaryImageId}
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime+' mins'}</h4>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout />);