# React 

# NPM
->not a node package manager
->It manages the all packages
->All packages are availabel in this npm
->Biggest package manager
->standard repository for all the packages
->we can use npm to include any package


# PACKAGE.JSON
->Package.json is a configuration for npm
->It keeps a track of one version of that package is installed into    our system


# PACKAGE-LOCK.JSON
->It keeps all the tracks of exact version that is being installed
->It does not update like (^)


# BUNDLER
->A package helps to minify the whole code to push it to production
->Used to bundle the whole code
->Examples are Webpack, veet, parcel 


DEPENDENCIES(package, library)
->2 types
    DEV DEPENDENCY
    ->Required for our development phase
    NORMAL DEPENDENCY
    ->USed in Production also
->npm install -D parcel 
->-D means I need this as a Dev dependency


# PARCEL (manager of babel- BEAST)
->"devDependencies": {
    "parcel": "^2.15.4"
  }
->if a new version is released 2.15.5 parcel will automatically updates its version if we are putting ^(Carrat)
->It updates only for minor upgrades
->^ for minor upgrades
->~ for major upgradesQ2
->Major upgrades means lot of things gonna changes, so it is not good update like this
->It creates a dev build, local sever, automatically refreshes the browser if we change anything in files
->Parcel is doing HMR-Hot Module Replacement(automatically refreshes)
->Parcel is using File Watching Algorithm which is written C++
->Caching - It gives faster development
->Parcel will do Image Optimization
->Minification
->Bundling
->Compressing
->Consistent Hashing - It is a technique to evenly distribute keys across servers in a way that    minimizes remapping when servers are added or removed.
->Code splitting
->Differential Bundling - An app can be opended in web browser, firebox , it supports older browsers
->Diagnostic - beautiful errors
->Error Handling
->HTTPs
->Tree Shaking - remove unused code
->It has different build for dev and production bundles


# NODE MODULES
->It contains all the code that we fetch from npm
->It is like a database abotu dependencies
->These are very heavyy


# TRANSITIVE DEPENDENCY
->Pakage.json shows that the parcel is our dependency
->Parcel itself be dependent on lot of things
->Dependency Tree


** No need to push these node modules into the git
** What ever we can regenerate dont put it onthe git

** npx->it will execute 


# CDN
->Fetching from CDN is costly

** parcel-cache and dist are temporaray files, can be regenerated


# Browserlist
"browsersList":[
    "last 2 chrome version",
    "last 2 Firefox version"
  ]
  ->If we use broswerlist in package.json like above, it supports the ast 2 versions here.

# npx parcel index.html
->To execute out project


# npx parcel build index.html
->To make our project ready for production
->Here it creates a dist folder


# Dist folder
->Reduced code will be there here

# Scripts
->till now we are using npx parcel index.html fro executing
->npx parcel build index.html for building (production)
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
  ->Now after writing this in package.json, simply we use "npm run start or npm start" for executing
  ->IT creates a localhost fro our project, it means it assigns our project in to server.
  ->npm build won't work


# JSX
->It makes our life easy
->It is an advanced version of javascript
->JSX is a convention where we kind of merge HTML and JS
->JSX is not HTML inside of JS
->It is XML like syntax


# XML
->Extended markup language
->XML is a language used to store and share data using custom tags.
<student>
  <name>Chusmalatha</name>
  <age>21</age>
  <course>Computer Science</course>
</student>


# JS engine
->When we wirte JSX, this JSx code is transpile before it reaches the Js engine
->transpile means this code is converted to the code which can understand by the web browser, react
->transpiling is done by parcel not by its own, it uses babel

** ES6 (short for ECMAScript 6 or ECMAScript 2015) is the 6th version of JavaScript that introduced many new features to make coding easier and cleaner.



# babel
->It is a package
->Parcel installs it
->babel transpiles our code
->It is Js Compiler and transpiler
->It converts to JSX to react code
->Older browsers can't understand es6 code
->But babel transpiles that es6 code to a code that older browsers can understand


** we have to use camelcase when we write attributes in JSX
**className, tabIndex

# React Components
->Everything is a component in React
->Button title, input box, footer all are componenets in a react
->2 Types
  Class Based Components
  ->Old way of writing code 
  ->No one or very less uses this now
  ->It uses Js classes to create components

  Functional Components
  ->new way of writing code
  ->It uses JS fucntions to create components
  ->Mostly all uses this
  ->It return JSX code


# Component composition
->Creating 2 components and writing one inside the other
->Component inside a component
->We can write any JS code in curly braces { } in components (functions)
->we can write anything inside anything
->react component inside html element, html element inside react component and all 


** If we write normal we should use return, but incase of arrowfunction no need


# const data=api.getData();
->If it is a malicious api
->api sendind some malicious data
->api wants to attack
->this type of attack is known as cross site scripting
->JSX can take care of these attacks
->JSX can escape it 
->JSX wont blindly run it , it will sanitize the data and then pass it


** JSX makes our code more readable not React
** JSX must return only one parent element. So when you are returning multiple elements (like an <h1> and an <h3>), you mst wrap them in something like in div tag or <> </>
** const heading = (
  <>
  {elem}
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
    </h1>
    );
    </>


 Before Developing our app, we should plan it(what we are going to build)
# Food APP
* Header
  ->Logo
  ->Nav Items
* Body
  ->Search
  ->RestaurantContainer
    ->RestaurantCard
* Footer
  ->Copyright
  ->Links
  ->Address
  ->Contacts


# Props
->Props is short form for properties
->are just normal arguments to a function
->Passing a prop to a component is just a passing an argument to a function
->we can pass dynamic data to our card
->When we have to dynamically passing some data to a acomponent, we pass in as a prop
->const RestaurantCard =(props) => {
    console.log(props);
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media.istockphoto.com/id/1056663060/photo/indian-traditional-chicken-biryani-in-handi-dish.jpg?s=612x612&w=0&k=20&c=Emaz4NISjTrd4c76r-o6gMx1QiDQloTjb91-nPmbIYU="
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resName="Chusma Foods"
                cuisine="Biriyani, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes"
                />
                <RestaurantCard
                resName="Renu Foods"
                cuisine="KFC, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes" />
            </div>
->We can desturcture this data as 
->const RestaurantCard =(props) => {
  {resName, cuisine}=props
->const RestaurantCard =({resName, cuisine})

# config driven UI
->Swiggy done cofig driven UI
->we can't build different website for different areas like delhi, banagalore, hyderabad
->our website is driven by data(configs)
->controlling UI using the data[backend]
->According to the data we are getting from backend , my UI is changed. This is known as Config driven UI


**Data will come in form of JSON
# Unique ID
->This is a React rule. When you are displaying a list of components using .map(), React needs a     unique key for each item.
->It helps React identify which item is which.
->Each sibling in a list must have a unique, stable key (like and ID).
->Without proper keys, React may bishave or show a warning in the console.
->When we have more children for a single parent, we should definetly use an id as unique key.

**
->don't take index as a keys
->it is ok to take index as key, but not recommended
->not using keys (not accepted) <<< index as key <<<<< unique id (best practice)


# Why React
->It make us that write less code and do more
->It optimizes web page
->React is fast in DOM manipulation
->React is only good at DOM manipulation

# File Structure
->It is not mandatory, but it is better to have a files like similar files are in one folder


# import
->when importing the user-defined file, if we dont mention the extension. By default, it takes .js as extension


** Never ever keep the hardcoded data into components file
** UI layer shows the data which is given by data layer


# Export and Import
->2 types of Export/Import
  ->Default Export/Import
    export default component;
    import component from "path";
  ->Named Export/Import
    ->export const component;
    ->import {component} from "path";

# React Hooks
->They are normal JS utilty functions which is given to us by react, wriiten by facebook developer inside the react
->utility fucntion given by react
->we have to import these, if we want to use these
->We have to import as named import

->useState()
  ->import {useState} from "react"
  ->superpowerful state variable in react
  ->mostly we use this (80%)
  ->useState is used to create a state varaible

->useEffect()
  ->20% we use this


# state variable
->It maintains the state of our component
->let ListOfRestaurants =[];              //normal variable
->const [ListOfRestaurants, setListOfRestaurants] =useState([]);   //state variable
->To modify the list, pass the argument as setList.... in state varibles
->Super powerful variable updates the UI also, whereas normal varibale doesn't

**Whenver the state varaible changes(updates), react quickly rerenders the component
**React will keep the UI in sink with the data layer. In the data layer, when you have a local state variable, as soon as your data layer updates, the UI layer will update by rendering.
**This is the reason why we use react
**It is a super fast


# Reconciliation Alogrithm(React Fiber)(in React16)
->To update the DOM, this one came in React16
->React Fibre is a new way of finding the diff and updatign the DOM
->React uses this algorithm
->Actual DOM means  <div>   </div>
->virtual DOM(obj) is representation of Actual DOM
->Virtuak DOM is kind of nothing, but normal JS
  # Diff Algorithm 
    ->It finds out the difference between 2 DOMs (virtual DOM and updated virtual DOM)
    ->Before Clicking the button and After clcikig the button
    ->Findind the difference between 2 DOMs and then update
    ->Finding out the difference between 2 HTML codes is tuff, but finding out the difference between the 2 JS Objects is easy and fast
->React does not touch the HTML, it just sees the difference betwen objects only.
->React can efficiently find out the difference betweene virtual DOMs and update the UI.This is the core of react's algorithm.