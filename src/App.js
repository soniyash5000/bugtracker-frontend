import React,{Component} from 'react';
import { Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Containers/Login';
import Home from './Containers/Home';
import Signup from './Containers/Signup';
import Authentication from './Containers/Authentication'
import Dashboard from "./Containers/Dashboard";
import CreateIssue from "./Containers/Create Issue/CreateIssue"
import Issue from "./Components/Issue/Issue";
import UpdateIssue from "./Containers/Update Issue/Updateissue";


class App extends Component{
  render(){
    return (
      <div className="App">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} /> 
              <Route path="/dashboard" render={
                  (props)  => <Authentication page = {<Dashboard  history={props.history} />} {...props}/>
                } 
              />
              <Route path="/createissue" render={
                  (props)  => <Authentication page = {<CreateIssue history={props.history}/>} {...props}/>
                } 
              />
               <Route path="/issue/:id" render={
                  (props)  => <Authentication page = {<Issue history={props.history} location = {props.location} />} {...props}/>
                } 
              />
               <Route path="/update-issue/:id" render={
                  (props)  => <Authentication page = {<UpdateIssue history={props.history} location = {props.location} />} {...props}/>
                } 
              />

          </Switch>
      </div>
    );
  }
}


export default App;

