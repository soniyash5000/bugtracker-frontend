import {Component} from 'react';
import {Form,Col,Button} from 'react-bootstrap'; 
import axios from 'axios';
// import {Redirect} from 'react-router-dom';

class createIssue extends Component {

    state = {
        title: '',
        description: '',
        priority: 1,
        assignee:'',
        tags: [
           null
        ]
    }


    onchangehandler = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let type = event.target.id;
        let value = event.target.value;
        this.setState({[type] : value});
    }

    arraychangehandler = (event) => {
        const values = [...this.state.tags];
        const index = event.target.id;
        console.log(values);
        console.log(index);
        values[index] =  event.target.value;
        this.setState({tags: values});
    }

    addtagshandler = (event) => {
        event.preventDefault();
        const values = [...this.state.tags];
        values.push(null);
        this.setState({tags: values})
    }


    submithandler = (event) => {
        console.log("clicked");
        let createissue = this.state;
       
        event.preventDefault();
        console.log(createissue.tags);
        let token = localStorage.getItem("token");
        var config = {
            method: 'post',
            url: 'https://bugtrackers-api.herokuapp.com/create-issue',
            headers: { 
            'x-access-token': token
            },
            data : createissue
        };
        axios(config)
        .then(response => {
            console.log(response.data, "jdsbksb");
            console.log(this.props);
        })
        .catch(error => {
            console.log(error);
        });
    }


    render(){


        return(
            <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={this.onchangehandler} type="text" placeholder="Enter title of the issue" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.onchangehandler} as="textarea" placeholder="Enter description of the issue" />
                    </Form.Group>
                    
                   

                    {/* Dropdown */}

                    <Form.Group as={Col} controlId="priority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control onChange={this.onchangehandler} as="select" defaultValue="Choose...">
                    <option  >1</option>
                    <option >2</option>
                    <option >3</option>
                    </Form.Control>
                    </Form.Group> 

                    {
                        this.state.tags.map((tag,index) =>{
                            return (
                                 <Form.Group key = {index} controlId = {index} >
                                    <Form.Label>Tag</Form.Label>
                                <Form.Control onChange={this.arraychangehandler} type="text" placeholder="Enter tag" />
                                </Form.Group> 
                            )
                        })
                    }
                     <Button onClick={this.addtagshandler} variant="primary" type="submit">
                        Add
                    </Button>


                    <Button onClick={this.submithandler} variant="primary" type="submit">
                        submit
                    </Button>




                </Form>
        );
    }
}

export default createIssue;




