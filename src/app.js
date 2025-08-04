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
import React, { lazy, Suspense } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { useState, useEffect } from "react";
import RestaurantMenu   from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";

//import Grocery from "./components/Grocery.js";


//lazy loading, on demand loading
//dynamic import
const Grocery = lazy(() => import("./components/Grocery.js"));
//this import is a function that returns a component, so we can use lazy loading

const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {

    const [userName, setUserName] = useState("");

        //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name:"Chusma"
        };
        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            {/** Outlet is used to render the child components of the AppLayout */}
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
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
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>
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