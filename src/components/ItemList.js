import { CDN_URL } from "../utils/constant";


const ItemList = ({ items, dummy }) => {
    return (
    <div className="border-gray-200 border-b-2 flex justify-between">
        <div>
            <h4>{items.name}</h4>
            <h4>{items.cuisines.slice(0, 3).join(", ")}</h4>
            <h4>{items.avgRating} stars</h4>
            <h4>{items.costForTwo} </h4>
        </div>
        <div>
            <div className="absolute">
                <button className="p-1 bg-black text-white mx-10 rounded-lg shadow-lg">Add +</button>
            </div>
            <img src={CDN_URL+items.cloudinaryImageId} className="h-30 w-30 rounded-lg" />
            
        </div>
        
        
    </div>
    );
}


export default ItemList;