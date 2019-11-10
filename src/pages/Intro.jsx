import React from "react";

import ReactDOM from 'react-dom';
//import Logo from "./images/0.jpg"
import IntroPage from './IntroPage.js';


export default class contactP extends React.Component {
    constructor(props){
        super(props)
        //binding the appropriate elements
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
        //state information
        this.state = {
          name1: '',
          email: '',
          company: '',
          response: '',
          responseToPost: '',
          info:[]
        };
        
    
      }
      handleChange = event => this.setState({name1: event.target.value})
      handleChange1 = event => this.setState({email: event.target.value})
      handleChange2 = event => this.setState({company: event.target.value})
      handleSubmit = async event => {
          event.preventDefault();
          const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            info: [this.state.name1, this.state.email, this.state.company],
            body: JSON.stringify({ info: this.state.info })
           
          });
          const body = await response.text();
      
  
          console.log("name ", this.state.name1);
          console.log("email " ,this.state.email)
          console.log("company ",this.state.company)
  
      }
  








render(){

return (
        <IntroPage name1={this.name1} name1Onchange={this.name1Onchange}
            img='https://singularityhub.com/wp-content/uploads/2018/12/airplane-flying-above-clouds_shutterstock_553131187-1068x601.jpg'
            />
    );

}
}
