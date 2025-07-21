import React from "react";
import {createRoot} from "react-dom/client";

// React .createElement => ReactElement - JS Object
// When we render this to DOM => HTML Element

/** 
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namasthe React"
);
*/

//JSX - is not HTML in JS or XML like syntax

//JSX code => React.createElement => ReactElement-Js Object => HTMLElement(render)
//Single line
const heading = (
<h1 className="head" tabIndex="1">
    Namaste React using JSX
    </h1>
    );

const fn1 = () => true;

const fn2 =() => {                 //fn1 and fn2 are same
    return true;
};


//React Functional Component
//USe capital letter first
//returns JSX code
const HeadingComponent1= () => { //Arrow function
    return <h1>Namaste react Functional Component</h1>

};

const elem = <span>React Element</span>;
const HeadingComponent2= () => <h1>Namaste react Functional Component</h1>;

const number=1000;
const data=api.getData();  // If it is a malicious api


const HeadingComponent= () => (    //Component composition
    <div id="container">
        <Title />
        {/* <Title> </Title> above one and this are same*/}
        {Title()}
        {number} 
        {data} 
    <h1>Namaste react Functional Component</h1>
    </div>
);

const Title = () => (
    <h1 className="head" tabIndex='5'>
        Namasthe React using JSX 
        </h1>
        
);

//All above 3 are same

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// It replaces the id="root"