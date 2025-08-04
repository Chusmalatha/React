import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {                            //reducer function
            //mutating(directly modifying) the state here

            //vanialla(older) Redux => DON'T MUTATE(MODIFY) STATE, returning was mandatory
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState  



            //REDUX TOOLKIT(NOW)
            //we have to mutatae the state 
            //redux still doing the above(older) one, but it doesnot ask developer to do


            //REDUX toolkit uses immer library js behind the scenes
            //immer library finding the difference between the original state and mutated state and then gives us backk the new state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;   //[] empty array
            //current(state) = [] this will  give use the new store
            //state=[] //, this wont work
            //the before one remains the same because of immer js, it does not mutate the original state
            //return {items: [] } ->it works
        },
    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;