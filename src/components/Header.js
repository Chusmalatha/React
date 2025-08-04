import { LOGO_URL } from "../utils/constant";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const data=useContext(UserContext);
    console.log(data)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mr-2 sm:bg-yellow-100 lg:bg-black">
            <div className="logo-container">
                <img className="m-3 rounded-2xl h-[75px] w-[75px]" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center text-white">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li  className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button
                    className="login"
                    onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        console.log(btnNameReact);
                    }}
                    >
                        {btnNameReact}
                    </button>

                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;