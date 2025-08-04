import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default User",
});



export default UserContext;


//we can access this anywhere in our app