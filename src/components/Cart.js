import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {


const cartItems = useSelector((store) => store.cart.items);      // it is better, it selects only the required one

//const store = useSelector((store) => store);   -> it subscibes to all the store
//cartItems = store.cart.items;
//this is not efficient


const dispatch = useDispatch();


const handleClearCart = () => {
    //Dispatch an action to clear the cart
    dispatch(clearCart());
    }


    return (
        <div className="text-center m-4 p-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
                onClick={() => handleClearCart()}>
                Clear Cart
                </button>
                {cartItems.length === 0 ? (
                <h2>Your cart is empty</h2>
                ) : (
                cartItems.map((item, index) => (
                <ItemList key={index} items={item} />
                ))
    )}
</div>

        </div>
    )
}

export default Cart;