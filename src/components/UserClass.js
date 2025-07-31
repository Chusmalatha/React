import React from "react";
import { useState } from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);   //it is mandatory
        this.state = {
            //count1: 0,
            //count2: 1,
            userInfo:{
                name:"Dummy",
                Location: "Default",
                avatar_url: "http://dummy-photo.com",
            },
        };

        console.log(this.props.name+" constructor called");
    }


    async componentDidMount() {
         // ✅ Async function allows 'await'
        console.log(this.props.name+" component did mountain");

        // API calls
        const data = await fetch("https://api.github.com/users/Chusmalatha");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });

    }
    
    render() {
      //  const { name, location }=this.props;
      // const { count }= this.props.count;

      console.log(this.props.name+" render called");
        return (
       <div className="user-card">
        <h1>Class Based Component</h1>
        {/** <h1>Count1 : {this.state.count1}</h1> */}
        <button 
        onClick={() => {
            //Never update state variables direcly
            this.setState({
                //this object will caonatin the update valuse of our state variables
                count1: this.state.count1+1,
            });
        }}>Count Increase</button>
        <img className="gitimg" src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h4>Contact : @chusma</h4>
    </div>
        );
    }

     

}

export default UserClass;