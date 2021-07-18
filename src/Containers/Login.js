import axios from 'axios';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class login extends Component {
    state = {
        teamname : "",
        name : "",
        email: "",
        password: "",
        error: ""
    }
    onchangehandler = (event) => {
        let type = event.target.name;
        let value = event.target.value;
      this.setState({[type] : value});
    }
   

    buttonclickedhandler = (event) => {
        let login = {
            team: this.state.teamname,
            password: this.state.password, 
            email : this.state.email
        }
        event.preventDefault();
        // console.log(login);
        axios.post('https://bugtrackers-api.herokuapp.com/login', login
        )
            .then(response => {
                console.log(response.data);
                localStorage.setItem("token",response.data.token);
                this.props.history.push('/dashboard');
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({error: error.response.data.message})
            }); 
    }
render(){
    return (
        <div>
            I am login Page
            <input placeholder="Email" onChange={this.onchangehandler} name = "email"/>
            <input placeholder="Name" onChange={this.onchangehandler} name = "name"/>
            <input placeholder="Team Name"  onChange={this.onchangehandler}name = "teamname"/>
            <input placeholder="Password"  onChange={this.onchangehandler} name = "password"/>
            <p>
                {this.state.error}
            </p>
            <Button onClick={this.buttonclickedhandler} variant="primary">Login</Button>

                <Button href="/signup" variant="secondary">Register Team</Button>

        </div>
    );
}
    
}


export default login;


