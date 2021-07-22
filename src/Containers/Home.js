import React from 'react';
import {Button} from 'react-bootstrap';

const Home = (props) => {
    return (
        <div>
            I am home Page
            <p>
                <Button href="/login" variant="secondary">Login</Button>
            </p>
            <p>
                <Button href="/signup" variant="secondary">Register Team</Button>
            </p>
            

        </div>
    );
}


export default Home;