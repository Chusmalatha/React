import { useState } from "react";
import { useEffect } from "react";

const User = (props) => {
    const [count1] = useState(0);
    const [count2] = useState(1);



    return (
    <div className="user-card">
        <h1>Count = {count1}</h1>
        <h1>Count = {count2}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location : Rajam</h3>
        <h4>Contact : @chusma</h4>
    </div>
    )
};

export default User;