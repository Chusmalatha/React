import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"; 



const appStore = configureStore({              // create a redux store
  reducer: {                        //whole reducer
    cart: cartReducer              //it can contain multiple small reducers
  },
});


export default appStore;