import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Search from './Search';
import PrivateRoute from './PrivateRoute';
import User from './User';
import LoginButton from './LoginForm';

function Main(props) {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Search />
          <Route exact path='/login' component={LoginButton} />
          <PrivateRoute exact path='/user' component={User} loggedIn={false}/>
          
  
        </>
      </BrowserRouter>
    )
  }



export default Main