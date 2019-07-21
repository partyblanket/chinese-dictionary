import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Search from './Search';
import PrivateRoute from './PrivateRoute';
import User from './User';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { checkJWT } from '../utils/actions'

function Main(props) {
    props.dispatch(checkJWT())
    return (
      <BrowserRouter>
        <>
          <Header />
          <Search />
          <Route exact path='/login' component={LoginForm} />
          <PrivateRoute exact path='/user' component={User} loggedIn={false}/>
          
  
        </>
      </BrowserRouter>
    )
  }



function mapStateToProps(state) {
  return {
  };
};

export default connect(mapStateToProps)(Main)