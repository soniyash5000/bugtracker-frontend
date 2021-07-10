import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {yash} from '../constant.js'

const ProtectedRoute = ({component: Component, ...rest}) => {
  console.log(rest);
      return (
        <Route 
          {...rest} 
          render={(props) => {
            // console.log(props);
            console.log("in func ", rest)
            // console.log(isLogin()+ " kjsbdjbdkfbdb");
                let y = yash();
            return (
             y ?
                (
                    <Component {...props}  />
                ) :
                <Redirect to='/login' />
            )
          }} 
        />
      )
  }

export default ProtectedRoute
