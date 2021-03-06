import { Component } from 'react';
import {Table,Card,Navbar,Nav,Button} from 'react-bootstrap';
import axios from 'axios';
import "./Dashboard.css";
import {Link} from 'react-router-dom';

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

        let token = localStorage.getItem("token");
        var config = {
            method: 'get',
            url: 'https://bugtrackers-api.herokuapp.com/dashboard',
            headers: { 
                'x-access-token': token
            }
            };
    
            axios(config)
            .then(response => {
                console.log(response.data)
           this.setState({data: response.data.data})
           let members = response.data.data["team-members"];
            this.setState({members : Object.entries(members)});
            this.setState({issues : response.data.data["issue-list"]});
            })
            .catch(error => {
            console.log(error);
            });
            
        }

        issueHandler = (index) => {
            console.log(index);
            this.props.history.push('/issue/' + index);
        }
        
        
    render(){

        const x = this.state.data["issue-list"];
        console.log(x);

        return (
            <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Bug-Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/createIssue">Create Issue</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="/">
                <Button onClick={this.logoutHandler} variant="primary">Logout</Button>
        
                   </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="dashboard">
                <div className="projectdescription">
                    <p><b>Team Name:</b> {this.state.data["team-name"]}</p> 
                    <p><b>Project Name: </b>{this.state.data["project-name"]}</p>
                </div>
                 
                    <div className="MainData">
                    {console.log(this.state.members)}
                    <div className = "cards">
                    {
                        this.state.members.map(member => {
                            console.log(member);
                            return (
                                <div key={member[0]}>
                                    <Card style={{ width: '15rem' , 'marginBottom': '10px'}}>
                                        <Card.Body>
                                            <Card.Title>{member[1].name} </Card.Title>
                                            <Card.Subtitle className="mb-2 email text-muted">{member[1].email}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted"><b>Issues Working: </b> {member[1]["issue-working"]}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        )
                    }
                    </div>

                    {/* Issue Table */}

                <div className="table">
                    <Table responsive="lg" striped bordered hover>
                        <thead  >
                            <tr>
                            <th>#</th>
                            <th>Title </th>
                            <th>Author</th>
                            <th>Author Email</th>
                            <th>Assignee</th>
                            <th>Priority</th>
                            <th>Description</th>
                            <th>Tags</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                        this.state.issues.map((issue,index) => {
                            // console.log(this.props.history)
                            // const path = "/issue/" + index;
                            // console.log(path)
                            return (
                               
                                // onClick={() => this.issueHandler(index)} 
                                <tr key = {index}>
                                   
                                    <td>{issue.index}</td>
                                    <td >  <Link
                                    to={{
                                        pathname: `/issue/${index+1}`,
                                        state: { fromDashboard: issue }
                                    } }
                                    // target="_blank" 
                                    // rel="noopener noreferrer"
                                    >{issue.title}</Link> </td>
                                    <td>{issue.author} </td>
                                    <td>{issue["author-email"]} </td>
                                    <td>{issue.assignee} </td>
                                    <td>{issue.priority} </td>
                                    <td>{issue.description} </td>
                                    <td>{
                                            issue.tags.map( tag => {
                                                return <span> {tag} </span>
                                            }
                                            )
                                        } 
                                    </td>
                                    <td>{issue.status} </td>

                                </tr>
                            )
                        })
                    }
                        </tbody>
                    </Table>
                </div>

                </div>
            </div>
            
            </div>
            );
    }
   
    
}

export default Dashboard;
