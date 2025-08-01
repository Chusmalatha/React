import { useState } from "react";
import resObj from "./mockData";
import {useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
    const restaurant = resObj.find((item) => item.id === resId);
    if (restaurant) {
      setResInfo(restaurant);
    } else {
      setResInfo(null); // for invalid IDs
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;