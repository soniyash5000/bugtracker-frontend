import {Component} from 'react';
import {Form,Button,Col} from 'react-bootstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import "./Updateissue.css"


class updateIssue extends Component {

    state = {
        data : this.props.location.state.fromIssue,
        redirect : null
        }

    onchangehandler  = (event) => {
        const type = event.target.id;
        const value = event.target.value;
        const x = {...this.state.data};
        x[type] = value;
        this.setState({data : x })
    }


    submithandler = (event) => {
        event.preventDefault();
        
        let data = {
            title : this.state.data.title,
            description : this.state.data.description,
            priority : this.state.data.priority,
            status : this.state.data.status,
            index : this.state.data.index
        }

        let token = localStorage.getItem("token");
        var config = {
          method: 'post',
          url: 'https://bugtrackers-api.herokuapp.com/update-issue',
          headers: { 
            'x-access-token': token
          },
          data : data
        };
        
        axios(config)
        .then(response => {
          console.log(response.data);
          this.setState({redirect : "/dashboard"});
        //   this.props.history.push("/dashboard");
        })
        .catch(error => {
          console.log(error.response);
        });
    }

    render(){
        if(this.state.redirect)
        {
            return (
                <Redirect to={
                    {
                        pathname: this.state.redirect
                    }
                } />
            )
        }

        let data = this.state.data;
        return (
            <div className="updateIssue">
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control defaultValue={data.title} onChange={this.onchangehandler} type="text" placeholder="Enter title of the issue" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control defaultValue={data.description} onChange={this.onchangehandler} as="textarea" placeholder="Enter description of the issue" />
                    </Form.Group>
                    
                   

                    {/* Dropdown */}

                    <Form.Group className="dropdown" as={Col} controlId="priority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control defaultValue={data.priority} onChange={this.onchangehandler} as="select" >
                    <option  >1</option>
                    <option >2</option>
                    <option >3</option>
                    </Form.Control>
                    </Form.Group> 

                    <Form.Group className="dropdown" as={Col} controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control defaultValue={data.status} onChange={this.onchangehandler} as="select" >
                    <option  >pending</option>
                    <option >finished</option>
                    </Form.Control>
                    </Form.Group> 

                    <Button className="updateIssueButton" onClick={this.submithandler} variant="primary" type="submit">
                        Update Issue
                    </Button>

                </Form>
            </div>
        )
    }
}


export default updateIssue;