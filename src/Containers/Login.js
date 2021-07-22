import axios from 'axios';
import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
import "./Login.css"


class login extends Component {
    state = {
        teamname : "",
        name : "",
        email: "",
        password: "",
        error: ""
    }
    onchangehandler = (event) => {
        let type = event.target.id;
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
            <div className="Login">
                Login
                <Button className="loginRegister" href="/signup" variant="secondary">Register Team</Button>

                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="teamname">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Team name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="text" placeholder="Password" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>
            
                <p>
                    {this.state.error}
                </p>
                <Button className="loginSubmit" onClick={this.buttonclickedhandler} variant="primary">Login</Button>

            </div>

        </div>

        
        
    );
}
    
}


export default login;


