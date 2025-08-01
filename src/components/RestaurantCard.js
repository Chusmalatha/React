import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props) => {
    const{resData}=props;
    return(
        <div className="m-4 p-4 w-[230] rounded-lg h-[400px] bg-gray-200 hover:bg-gray-400" >
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
        </div>
    )
}


export default RestaurantCard;