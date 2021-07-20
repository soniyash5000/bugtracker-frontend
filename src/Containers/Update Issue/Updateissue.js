import {Component} from 'react';
import {Form,Button,Col} from 'react-bootstrap'
import axios from 'axios'
class updateIssue extends Component {

    state = {
        data: {}
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
            })
            .catch(error => {
            console.log(error);
            });
            
        }

    render(){
        return (
            <div>
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
                    
                    {/* Dropdown for Status */}

                    <Form.Group as={Col} controlId="priority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control onChange={this.onchangehandler} as="select" defaultValue="Choose...">
                    <option  >1</option>
                    <option >2</option>
                    <option >3</option>
                    </Form.Control>
                    </Form.Group> 

                     <Button onClick={this.addtagshandler} variant="primary" type="submit">
                        Add
                    </Button>


                    <Button onClick={this.submithandler} variant="primary" type="submit">
                        submit
                    </Button>




                </Form>
            </div>
        )
    }
}


export default updateIssue;
