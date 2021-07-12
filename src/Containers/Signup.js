import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

// import  Input from '../Components/Input';

class Signup extends Component {

    state = {
        teamname: '',
        password: '',
        projectname: '',
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        email1: '',
        email2: '',
        email3: '',
        email4: '',
        error: ''
    }

    onchangehandler = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let type = event.target.id;
        let value = event.target.value;
        this.setState({[type] : value});
    }

    buttonclickedhandler = (event) => {
        console.log("clicked");
        let signup = {
            "team-name" : this.state.teamname,
            "password": this.state.password,
            "project-name": this.state.projectname,
            "team-members" : [
                [
                    this.state.name1,
                    this.state.email1
                ],
                [
                    this.state.name2,
                    this.state.email2
                ],
                [
                    this.state.name3,
                    this.state.email3
                ],
                [
                    this.state.name4,
                    this.state.email4
                ]
            ]
        }
        event.preventDefault();
        console.log(signup);
        axios.post('https://bugtrackers-api.herokuapp.com/register-team', signup
        )
            .then(response => {
                console.log(response.data);
                // sessionStorage.setItem("token", response.data.token);
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({error: error.response.data.message});
            }); 
    }
    render(){
        return (
            <div>
                <Form>
                    <Form.Group controlId="teamname">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter team name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="projectname">
                        <Form.Label>Project Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Project Name" />
                    </Form.Group>

                    
                    Enter details of team members
                    {/* 1st member */}
                    <Form.Group controlId="email1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="name1">
                        <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                </Form.Group> 
                
                {/* 2nd member */}
                
                <Form.Group controlId="email2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                    {/* 3rd member */}
                </Form.Group> <Form.Group controlId="email3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                    {/* 4 member */}
                </Form.Group> <Form.Group controlId="email4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                </Form.Group>

                </Form>
                    {/* Enter details of team members
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/> */}
                    <p>{this.state.error}</p>

                    <Button onClick={this.buttonclickedhandler} variant="primary" type="submit">
                        Submit
                    </Button>
            </div>
        );
    }
}


export default Signup;