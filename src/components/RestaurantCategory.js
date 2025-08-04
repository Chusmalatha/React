import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

   {/**  const [showItems, setShowItems] = useState(false);

    */} 
    console.log(dummy);

    const handleClick = () => {
        setShowIndex();
    }

    

    return(
    <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 w-[800]">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.name} ({data.name.length})</span>
                <span>🢃</span>
            </div>
                {/* Accordion Body */}
                {showItems && <ItemList items={data} dummy={dummy} /> }       
        </div>
    </div>
    );
};

export default RestaurantCategory;