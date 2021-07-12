import React,{Component} from 'react';
import {Redirect, Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Containers/Login';
import Home from './Containers/Home';
import Signup from './Containers/Signup';
import Authentication from './Containers/Authentication'
import Dashboard from "./Containers/Dashboard";
import CreateIssue from "./Containers/Create Issue/CreateIssue"
// import ProtectedRoute from './Containers/ProtectedRoute';

class App extends Component{
  render(){
    return (
      <div className="App">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup"  > 
              {
                false ? <Redirect to="/"/> : <Signup/>
              }
              </Route>
              <Route path="/dashboard" render={
                  (props)  => <Authentication page = {<Dashboard/>} {...props}/>
                } 
              />
              <Route path="/createissue" render={
                  (props)  => <Authentication page = {<CreateIssue/>} {...props}/>
                } 
              />

              {/* <ProtectedRoute path="/dashboard" component={Dashboard}/> */}
          </Switch>
      </div>
    );
  }
}


export default App;

