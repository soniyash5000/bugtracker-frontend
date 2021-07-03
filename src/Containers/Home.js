import React from 'react';
import {Button} from 'react-bootstrap';

const Home = (props) => {
    return (
        <div>
            I am home Page

            <Button href="/login" variant="secondary">Login</Button>
            <Button href="/signup" variant="secondary">Register Team</Button>

        </div>
    );
}


export default Home;