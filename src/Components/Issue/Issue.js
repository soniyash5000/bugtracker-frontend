
import {Component} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./Issue.css"

class issue extends Component{

    state = {
        data: {},
        tags: []
    }
    componentDidMount(){
        let token = localStorage.getItem("token");
        const x = this.props.location.pathname;
        const y = x.slice(-1);
        console.log(x);
        
        var config = {
            method: 'get',
            url: `https://bugtrackers-api.herokuapp.com/issue-details?index=${y}`,
            headers: { 
                'x-access-token': token
            }
            };
            // , {params: {index: 1}}
            axios(config)
            .then(response => {
                // console.log(response.data)
           this.setState({data: response.data.data})
           this.setState({tags: response.data.data.tags})
            })
            .catch(error => {
            console.log(error);
            });
            
        }

    render(){
        const x = this.props.location.pathname;
        const y = x.slice(-1);
        console.log(issue.tags);
        const update = "/update-issue/" + y;
        console.log(update)
        return (
            <div className="Issue">
                <p className="heading">Issue {this.state.data.index} Details</p>
                <div className="Issuedetails">
                    <p><b>Title:- </b>{this.state.data.title}</p>
                    {/* <p><b>Index:- </b>{this.state.data.index}</p> */}
                    <p><b>Description:- </b>{this.state.data.description}</p>
                    <p><b>Priority:- </b>{this.state.data.priority}</p>
                    <p><b>Author:- </b>{this.state.data.author}</p>
                    <p><b>Assignee:- </b>{this.state.data.assignee}</p>
                    <p><b>Status:- </b>{this.state.data.status}</p>

                    {/* <p><b>Author Email:- </b>{this.state.data["author-email"]}</p> */}
                    <p> <b>Tags:- </b>
                        {
                            this.state.tags.map( (tag,index) => {
                                return <span key={index} > {tag} </span>
                            })
                        }
                    </p> 
                    
                    
                    <Link
                                            to={{
                                                pathname:  `/update-issue/${y}` ,
                                                state: { fromIssue: this.state.data }
                                            } }
                                            ><Button className="editbutton" variant="primary">
                        Edit Issue</Button></Link>
                        {/* href={update}  */}
                </div>
            </div>
            
        );

    }
}

// const Issue = (props) => {
//     const location = useLocation();
//     const issue = location.state.fromDashboard; 
//     console.log(issue);
//     return (
//         <div>
//             <p><b>Title:- </b>{issue.title}</p>
//             <p><b>Index:- </b>{issue.index}</p>
//             <p><b>Description:- </b>{issue.description}</p>
//             <p><b>Priority:- </b>{issue.priority}</p>
//             <p><b>Author:- </b>{issue.author}</p>
//             <p><b>Assignee:- </b>{issue.assignee}</p>
//             <p><b>Author Email:- </b>{issue["author-email"]}</p>
//             <p>
//                 <b>Tags:- </b>
//                 {
//                     issue.tags.map(tag => {
//                         return <span> {tag} </span>
//                     })
//                 }
//             </p>
//         </div>
//     );
// }

export default issue;