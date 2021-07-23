import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import "./Signup.css"

// import  Input from '../Components/Input';

class Signup extends Component {

    state = {
        teamname: '',
        password: '',
        projectname: '',
        error: '',
        members: [
            {
                name: null,
                email: null
            }
        ]
    }
        // [name, email]


    onchangehandler = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let type = event.target.id;
        let value = event.target.value;
        this.setState({[type] : value});
    }

    buttonclickedhandler = (event) => {
        console.log("clicked");
        const members = this.state.members.map(member => {
            return Object.values(member);
        })
        console.log(members);
        let signup = {
            "team-name" : this.state.teamname,
            "password": this.state.password,
            "project-name": this.state.projectname,
            "team-members" : members
            
        }
        event.preventDefault();
        console.log(signup);
        axios.post('https://bugtrackers-api.herokuapp.com/register-team', signup
        )
            .then(response => {
                console.log(response.data);
                console.log(this.props);
                this.props.history.push('/login');
            })
            .catch(error => {
                // console.log(error.response.data);
                // this.setState({error: error.response.data.message});
            }); 
    }

    arraychangehandler = (event,index) => {
        const id = event.target.id;
        const value = event.target.value;
        const values = [...this.state.members];
        values[index][id] = value;
        this.setState({members: values})

    }
    addmemberhandler = (event) => {
        event.preventDefault();
        const values = [...this.state.members];
        const x = {
            name: null,
            email: null
        }
        values.push(x);
        this.setState({members: values})
    }



    render(){
        return (
            <div className="signup">
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


                    
                    <p className="teammembers">Enter details of team members</p>


                    {
                        this.state.members.map((tag,index) =>{
                            return ( 
                                <div key = {index}>

                                <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(event) => this.arraychangehandler(event,index)} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
        
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(event) => this.arraychangehandler(event,index)} type="text" placeholder="Enter Name" />
                        </Form.Group> 
                        </div>

                            )
                        })
                    }
                        {/* Button to add user  */}
                        <Button onClick={this.addmemberhandler} variant="primary" type="submit">
                        Add Another Team Member
                    </Button>


                    
                </Form>
                    {/* Enter details of team members
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/> */}
                    <p>{this.state.error}</p>

                    <Button className="submit" onClick={this.buttonclickedhandler} variant="primary" type="submit">
                        Submit
                    </Button>
            </div>
        );
    }
}


export default Signup;


// "team-members" : [
//    {
//        name: "yash",
//        email : "yashsoni@gmail.com"
//    },
//    {
//     name: "yashwant",
//     email : "yashwantsingh@gmail.com"
//     },
//     {
//         name: "vedansh",
//         email : "vedanshjain@gmail.com"
//     },
//     {
//         name: "vinay",
//         email : "vianyachari@gmail.com"
//     }
// ]