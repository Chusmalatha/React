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
->2 elements :the current state value and a function to update it


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
->React can efficiently find out the difference betweene virtual DOMs and update the UI. This is the core of react's algorithm.


# Monolith Architecture
->when the web app were developed traditionally, they were all developed using a monolith architecture
->when we built a huge big project, it has some small pieces like API code, UI code, Authentication code, Database connectivity code, sending SMS code
->All the code was there in the same service
->Everything is in one single project.
->Frontend (React) and backend (like Node.js or Express) are together.
->You build and deploy everything at once.


# Microservice Architecture
->we have different services for different jobs
->backend service, ui service, authentication service etc..
->All these services combined together forms a big app
->each service has its job, no body interfreing with it
->every service has different team
->everything is seperate
->we can use different languages for different services
->All theses services run on their specific(different) ports
* :1234=>UI
* :1000=>BE
* :3000=>SMS
->The app is divided into small, separate parts.
->React frontend is separate.
->Backend is made of different services (like login, payment, etc.)
->Each service has its own small code and runs separately.


# How we apps fetch the data from backend
->There are 2 ways
  (1)
  ->as soon as our page loads, we can make an API call and when we get the data then we can render it on to the UI
  (2)
  ->as soon as our page loads, we just quickly render it UI. After we quickly rendered, we will make an API call and the rerender it again

->In React we will use 2nd approach


# why 2nd approach
->This gives us a better UX(user experience)
->In 1st approach, nothing will be shown to us fro sometine and after sometime suddenly we are able to se the UI. It is not good
->In 2nd approach it is not like that, it is better
->React has best render mechanism. It can do very fast


(1)
 useEffect(() => {
        console.log("useEffect called");
    }, []);
->Here it prints in console after rendering the page
->That is the callback function, and it executes after rendering the page


(2)
   useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);
    };
->UseEffect has 2 aruments one is callback function and the other is dependency array
->this is called evrytime  when our component renders
->callback fucntion is mandatory
->if no dependency array=> UseEffect is called in every render
->if dependency array is empty =[] => useEffect is called on intial render(just once)
->if there is some dependency, it will cal when dependency updated


# CORS policy
->chrome is not allowing us to call API's from local host (from one origin to another origin)
->https://corsproxy.io/?
->Paste  this before an API
->we are calling CORS proxy,CORS proxy is making an API call to swiggy and getting the datat and giving to us.


# Swiggy API
->https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# Shimmer UI
->Before loading the actual data, it shows some user experience UI
->Like before loading reastuarants in swiggy app, it shows the empty cards


# useState 
->Try to write these on top of the component <body />
->Never use this in if else conditions, for loops, functions
->if we follow these, our application will run smoothly. we dont get lot of errors


# Router
->npm i react-router-dom is used to install the router 
->the above is not worked properly so use this below one
->npm install react@19.1.1 react-dom@19.1.1
->npm install react-router-dom@6.23.0
->inorder to create routers, intially creating routing configuration

# import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
->createBrowserRouter creates a router configuration
->RouterProvider provides routing configuration to our app


# Outlet
->Whenever there is a change in path, outlet will be filled with the children according to the path on what page we are

# What is Routing in React?
->Routing is the way your app handles different URLs and shows different components/pages based on the current URL — without reloading the page.
🏠Example from a Website
URL Path	What should show?
/	Homepage
/about	About Us page
/contact	Contact Form page


# import { useRouteError } from "react-router-dom";
->useRouteError is a hook given to us by react-router-dom
->It gives more info about the errors
->Whenever a function starts with use, it is hook


# anchor tag
->In routing, dont use the anchor tag
->If we use the anchor tag, it loads the whole page. But we dont want like that
->Use the link given by the react-router-dom


# 2 types of routing in webapps
1)Client side routing
  ->no need to call the networks
  ->only one page and jst the component getting interchanged
  ->only one page reloads at first time
2)Server side routing
  ->if i click on my anchor tag("/about") about.html , it reloads the whole page, it sends the network call to about.html and fetches that html and renders it on to the web page
  ->we make a network call, that page coming from server


# class base components
->We dont use now a days, but useful in interviews
->If we know this, we can easily understand the react functional components
->It is just a normal JS class
->class UserClass extends React.Component
->React class has a render method
->It is a class that which has some render which written some piece of jsx


# Life cycle of a parent child relationship
->About us page is parent component
->Useclasss is there in about us
->when about page starts rendering onto out web page, it starts rendering the JSX. It goes line by line and see userClass components, and it starts to load useClass now 
->Whenever the class is instantiated, the cosntructor is called
->After that, render is called
1)Parent constructor
2)Parent Render
  ->1)child Constructor
  ->2)child Render
  ->3)child ComponentDidMountain
3)Parent componenDidMountain


# componentDidMountain()
->componentDidMount() is a lifecycle method in React class-based components.
->It is used to make an API calls


# when there are multiple children
->Parent Constructor
->Parent render
  *Child-1 Constructor
  *Child-1 render

  *Child-2 Constructor
  *Child-2 Render

  <DOM UPDATED - IN SINGLE BATCH>
  *Child-1 componentDidMountain
  *Child-2 componentDidMountain
->Parent componentDidMountain


# React LifeCycle method diagram
->projects.wojtekmaj.pl(website)
->React has  2 phases
  ->Render phase(is batched)
    ->constructor
    ->Render
  ->Commit phase(is batched)

->First constructor called and then render called (belongs to Render phase)
->after react updated, then componentDidMountian is called
->After completion of render phase for both the children, later commit phase occurs


** DOM manipulation is expensive. so that's why it batches things up. This is why react is fast

----MOUNTING----
->Constructor (Dummy)
->Render (Dummmy)
      <HTML Dummy>
->Component Did Mount
      <API call>
      <this.setState>   ->state variable is updated


    ----UPDATE-------
    ->render(API call)
    <HTML (new API data)>


->Component Did Update


-----UNMOUNTING-------
->this function will call when the page is close
->If we went to contact us page or about page, then it calls

# Single responsibility function
->the single responsibilty of restuarant is to show that 
->header.js has single responsibilty to show header
->we should give single responsibilty to every component
->keep your components as light weight as it is possible


# modularity
->breaking down our code  into different different small components
->then we can perform test cases easily adn we can test every small part
->we can catch bug easily and where it is occuring
->we can re use it again and again (Reusable)
->Maintainble
->Testable


# custom hooks
->Hook is just normal JS function
->The hook we create by our own are called custom hooks
->It is not mandatory to use "use" before the name,  but it is recommended
->But linter throws an error, if we dont follow these conventions
->if somebody comes and see this code, they can easily know that this is hook, this function like that
->linters are tools
->if we setup our linters beas on react, then it will throw error if we dont follow these conventions.



# Chunking
# Code splitting
# Dynamic Bundling
# Lazy loading
# on demand loading
->Parcle bundles the all js files into one js file
->but whe the application is big, the file size will be high
->It is not good
->If we have separate files, then it is difficult to call that many(1000) functions
->Both of these solutionsare not coorect
->so, we will try to make smaller bundles, this process is known as chunking

# on demand loading
->we dont load intiially
->we will load as if required


# suspense
->on demand it loads
->as soon as i click on this , it will take some time to fetch the data
->at that particular time , this middle state causes the errors
->suspense is a component, comes from react
->const Grocery = lazy(() => import("./components/Grocery.js"));


# SASS and SCSS
->Writing  css with some super powers
->companies dont use this, SASS and SCSS


# Style components
->lot of big companies use these style components


# material UI ->this makes our app more beautiful, this is a react library


->Tailwind CSS
->Bootstrap
->chakra UI
->ant design


# Tailwind CSS
->this is a framework
->it works with all the framewroks like react, angular
->it is generic CSS framework
->it is a shortcut method of wirting CSS

# PsotCSS
->postCSS is a tool for transforming CSS along with JS
->TailwindCSS behind the scenes uses postCSS


# Disadvantage
->If we have to apply a lot of  CSS to our component. we should write classes for each and every small thing. it will be very long. this makes or code ugly.


**Parcel bundels the code right.
**It will include only CSS classes which are required
->For example if we have 3 m-4 's , it will include only one m-4


# Higher order component
->It is a function that takes a component and returns a component
->it is just a normal JS funciton 
->It takes exisiting component as an input and enhances it , modifies it.


# Controlled and Uncontrolled components
->if restuarantCategory was controlling itself, it would have been controlling component
->if i take away this power, that this is a uncontrolling component

->if it was managing itself, then it is a uncotnrollign component



# Props Drilling
->Props drilling is when you pass data from a parent component through multiple layers of child components, even if only the last one needs it.
->Grand parent -> parent -> Child -> GrandChild
->we should avoid this


# React Context
->Here we avoid the props drilling
->context is lika a global thing, we can access anywhere in the webpage
->Using useContext hook, we will use this conetxt anywhere in our app
->In class base components we, dont not have hooks. we cannot use useContext hook here
<div>
    loggedInUser : <UserContext.Consumer>
    {(data) => console.log(data.loggedInUser)}
    </UserContext.Consumer>
</div>
->we should use like this in classBaseComponents as we should not use hooks


# UserContext.Provider

//Default
 <UserContext.Provider value={{ loggedInUser: "Chusma"}}>
  //Chusma
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: "RenuSri"}}>
      //RenuSri
        <Header />
        <Outlet />
        {/** Outlet is used to render the child components of the AppLayout */}
      </UserContext.Provider>
    </div>
  </UserContext.Provider>

->this is to change the name of the loggedin user
->the new name is visible in every where in our app

-If we wrap another usrcontec=xt to heade(like nested one)
->nested value will be shown in our app




...uncotnrolled and controlled
