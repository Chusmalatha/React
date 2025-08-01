import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";



const Body = () => {
    // Local State variable - super powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState(resObj);
    const [filteredRestaurant, setFilteredRestaurant] = useState(resObj);

    const [searchText,setSearchText]=useState("");

    //whenever state variable update, react triggers a reconciliation cycle(re-rendeers the component)

{/**    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(
            json
           // json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
    
    
    // Optional chaining
    //ListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   */}
     
    
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

    //Conditional Rendering
   // if(ListOfRestaurants.length === 0){
     //   return <Shimmer />;
    //}


    const OnlineStatus =useOnlineStatus();
    if(OnlineStatus === false){
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }

    return ListOfRestaurants.length === 0 ? 
    (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                     onChange={(e) => {
                        setSearchText(e.target.value);
                     }} 
                    />
                    <button onClick={() => {
                        // Filter the restaurant cards and update the UI
                        //searchText

                        const filteredRestaurants = ListOfRestaurants.filter(
                            (res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // Filter logic here
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                     
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
                {filteredRestaurant.map((restaurant)=>(
                  <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}><RestaurantCard resData={restaurant}/></Link>

                ))}
                
            </div>

        </div>
    );

};

export default Body;