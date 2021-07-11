import { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends Component  {

    state = {
        data : {},
        members: [],
        issues: []
    }

    logoutHandler = () => {
        localStorage.setItem("token","Ssfddsd");
    } 

    componentDidMount(){

        let token1 = localStorage.getItem("token");
        var config = {
            method: 'get',
            url: 'https://bugtrackers-api.herokuapp.com/dashboard',
            headers: { 
                'x-access-token': token1
            }
            };
    
            axios(config)
            .then(response => {
                // console.log(response.data)
           this.setState({data: response.data.data})
           let members = response.data.data["team-members"];
            this.setState({members : Object.entries(members)});
            this.setState({issues : response.data.data["issue-list"]});
            })
            .catch(error => {
            console.log(error);
            });
            
        }
        
        
    render(){

        const x = this.state.data["issue-list"];
        console.log(x);

        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Bug-Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Create Issue</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                <Nav.Link href="/">
                <Button onClick={this.logoutHandler} variant="primary">Logout</Button>
        
                   </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div>
                <div>
                   <p>Team-Name: {this.state.data["team-name"]}</p>
                    <p>{this.state.data["project-name"]}</p>
                    {
                        this.state.members.map(member => {
                            // console.log(member);
                            return (
                                <div key={member[0]}>
                                    {member[0]}                                      
                                    <span> </span>  
                                    {member[1].name}  
                                    <span> </span>  
                                    {member[1].email}
                                </div>
                            )
                        }
                        )
                    }
                    {
                        this.state.issues.map(function(issue,index){
                            console.log(issue.author);
                            return (
                                <div key = {index}>
                                    {issue.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            </div>
            );
    }
   
    
}

export default Dashboard;
