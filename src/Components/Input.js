import {Form} from 'react-bootstrap';

const Input = (props) => {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
            </Form>
        </div>
    );
}
export default Input;