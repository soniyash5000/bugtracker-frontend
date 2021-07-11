import { Component } from "react";
import axios from 'axios';
import Loader from "react-js-loader";
class Authentication extends Component{

    state = {
        token : '',
        isLoggedIn : false
    }

    componentDidMount() {
        let token1 = localStorage.getItem("token");
        var config = {
          method: 'get',
          url: 'https://bugtrackers-api.herokuapp.com/check-token',
          headers: { 
            'x-access-token': token1 
          }
        };
        
        axios(config)
        .then(response => {
          console.log(response.data);
        this.setState({token: token1});
        this.setState({isLoggedIn: true});
    })

        .catch(error => {
          console.log(error);
          this.props.history.push('/login');
        }); 
    }
    render(){
        console.log(this.props)
       return (
           <div>
               {
                   (() => {
                       if(this.state.isLoggedIn === true)
                       {
                           return (
                           <div> 
                               {/* dfdjhbfhk */}
                               {this.props.page}
                            </div>
                            )
                       }
                       else
                       {
                           return  <Loader type="spinner-cub" bgColor={"#000000"} title={"spinner-cub"} size={100} />
                       }
                   })()
               }
           </div>
       )
    }
}
    
    export default Authentication;

