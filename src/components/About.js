import React from "react";
import User  from "./User";
import UserClass  from "./UserClass";

class About extends React.Component{
    constructor(props) {
        super(props);

        console.log("Parent Costructor called");
    }

    componentDidMount() {
        console.log("Parent component did mountian");
    }


    render() {
        console.log("Parent render called");
        return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our restaurant app!</p>
            <UserClass name={"Chusma (class)"} location={"Rajam (class)"} />
            <UserClass name={"Renusri (class)"} location={"Ongole (class)"} />

            <User name={"Chusma (function)"}/>
        </div> 
        );
    }
}


{/**
    const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our restaurant app!</p>
            <UserClass name={"Chusma (class)"} location={"Rajam (class)"} />
            <User name={"Chusma (function)"}/>
        </div>
    )
}
    */}

export default About;