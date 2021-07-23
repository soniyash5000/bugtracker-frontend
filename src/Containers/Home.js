import React from 'react';
import {Button} from 'react-bootstrap';
import "./Home.css"


const Home = (props) => {
    return (
        <div className="home">
            <p className="heading">
                Track The Bug
            </p>
            <div className="box">
                <div className="buttons">
                    <p>
                        <Button className="button" href="/login" variant="primary">Login</Button>
                    </p>
                    <p>
                        <Button className="button" href="/signup" variant="primary">Register Team</Button>
                    </p>
                </div>
            </div>

            
           
            

        </div>
    );
}


export default Home;