import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContex from "../utils/UserContext";
import { data } from "autoprefixer";



const RestaurantCard =(props) => {
    const{resData}=props;
    const {loggedInUser} = useContext(UserContex);

    if (!resData || !resData.cloudinaryImageId) {
        return <div className="m-4 p-4 w-[230] h-[200px] bg-gray-100 rounded-lg">Invalid restaurant data</div>;
    }
    return(        
        <div data-testid="resCard"
        className="m-4 p-4 w-[230] rounded-lg h-[400px] bg-gray-200 hover:bg-gray-400" >
            <img
            className="rounded-lg h-[200px] w-[200px]"
            alt="res-logo"
            src={CDN_URL + resData.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-xl">{resData.name}</h3>
            <h4>{resData.cuisines.slice(0, 3).join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.slaString}</h4>
            <h4>User : {loggedInUser}</h4>
        </div>



    )
}


// Higher order component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white  mx-5 m-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />    {/** .... -> it will pass all the card we recieve */}
            </div>
        );
    };
};


export default RestaurantCard;