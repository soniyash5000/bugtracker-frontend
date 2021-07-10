import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Containers/Login';
import Home from './Containers/Home';
import Signup from './Containers/Signup';
import Dashboard from './Containers/Dashboard'
// import ProtectedRoute from './Containers/ProtectedRoute';

class App extends Component{
  render(){
    return (
      <div className="App">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              {/* <ProtectedRoute path="/dashboard" component={Dashboard}/> */}
          </Switch>
      </div>
    );
  }
}


export default App;

