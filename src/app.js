{/**
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
  */}

import Header from "./components/Header.js";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard.js";
import React from "react";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu   from "./components/RestaurantMenu.js";


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
            <Outlet />
            {/** Outlet is used to render the child components of the AppLayout */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:  [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },

]);

const root = createRoot(document.getElementById('root'));

{/** 
root.render(<AppLayout />);
*/}

root.render(<RouterProvider router={appRouter} />);