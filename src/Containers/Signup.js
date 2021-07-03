import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

// import  Input from '../Components/Input';

class Signup extends Component {

    state = {
        teamname: '',
        teampassword: '',
        membersname: [],
        membersemail: []
    }

    onchangehandler = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let type = event.target.id;
        let value = event.target.value;
        if(type === "email")
        {
            let x = this.state.membersemail;
            x.push(value);
            this.setState({membersemail: x});
        }
        else if(type === "name")
        {
            let x = this.state.membersname;
            x.push(value);
            this.setState({membersname: x});
        }
        else
        this.setState({[type] : value});
    }

    buttonclickedhandler = (event) => {
        console.log("clicked");
        // let login = {
        //     team: this.state.teamname,
        //     password: this.state.password, 
        //     email : this.state.email
        // }
        // event.preventDefault();
        // console.log(login);
        // axios.post('https://bugtrackers-api.herokuapp.com/login', login
        // )
        //     .then(response => {
        //         console.log(response.data);
        //         sessionStorage.setItem("token", response.data.token);
        //         this.props.history.push('/dashboard');
        //     })
        //     .catch(error => {
        //         console.log(error.response.data);
        //     }); 
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

                    <Form.Group controlId="teampassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="password" placeholder="Password" />
                    </Form.Group>
                    Enter details of team members
                    {/* 1st member */}
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                </Form.Group> 
                
                {/* 2nd member */}
                
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                    {/* 3rd member */}
                </Form.Group> <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                    {/* 4 member */}
                </Form.Group> <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter Name" />
                </Form.Group>

                </Form>
                    {/* Enter details of team members
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/> */}
                    <Button onClick={this.buttonclickedhandler} variant="primary" type="submit">
                        Submit
                    </Button>
            </div>
        );
    }
}


export default Signup;