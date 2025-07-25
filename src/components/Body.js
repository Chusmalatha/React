import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockData";
import { useState } from "react";
import resObj from "../utils/mockData";





const Body = () => {
    // Local State variable - super powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState(resObj);

    //Normal JS variable
   {/**   let ListOfRestaurantsJS = [
        {
        "id": "953024",
        "name": "Big Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/aa1c19cf-ff92-4af1-8bc1-f427c3c3ddfb_953024.jpg",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Chinese",
        "Tibetan",
        "Desserts"
            ],
        "avgRating": 3.8,
        "sla": {
              "deliveryTime": 37,
            }
        },
        {
            "id": "953025",
        "name": "Dominos",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/aa1c19cf-ff92-4af1-8bc1-f427c3c3ddfb_953024.jpg",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Chinese",
        "Tibetan",
        "Desserts"
            ],
        "avgRating": 4.5,
        "sla": {
              "deliveryTime": 37,
            }
        },
        {
            "id": "953026",
        "name": "MCD",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/aa1c19cf-ff92-4af1-8bc1-f427c3c3ddfb_953024.jpg",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Chinese",
        "Tibetan",
        "Desserts"
            ],
        "avgRating": 4.1,
        "sla": {
              "deliveryTime": 37,
            }
        }];
    */}

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter logic here
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/** <RestaurantCard 
                resName="Chusma Foods"
                cuisine="Biriyani, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes"
                />
                <RestaurantCard
                resName="Renu Foods"
                cuisine="KFC, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes" /> */}

                {/**<RestaurantCard resData={resObj[0]}/>
                <RestaurantCard resData={resObj[1]}/>
                <RestaurantCard resData={resObj[2]}/>*/}
                {ListOfRestaurants.map((restaurant)=>(
                  <RestaurantCard key={restaurant.id} resData={restaurant}/>

                ))}
                
            </div>

        </div>
    );

};

export default Body;