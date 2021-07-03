import { Component } from "react";

class Dashboard extends Component{
    render(){
        let token = sessionStorage.getItem("token");
//         if(token.length===0)
//         this.props.history.push('/');
        return(
            <div>
                I am a Dashboard
                <p>{token}</p>
            </div>
        );
    }
}

export default Dashboard;