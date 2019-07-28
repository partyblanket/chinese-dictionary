import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import PrivateRoute from "./PrivateRoute";
import User from "./User";
import LoginForm from "./LoginModal";
import { connect } from "react-redux";
import Collections from "./Collections";
import { getData } from "../utils/actions";

function Main({ dispatch }) {
  // if JWT then set email first so private route can be accessed.
  const token = localStorage.getItem("jwtoken");
  if (token) {
    const { email } = JSON.parse(window.atob(token.split(".")[1]));
    dispatch({ type: "JWT_LOGIN", email });
    dispatch(getData());
  }

  return (
    <BrowserRouter>
      <>
        <Header />
        <Search />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/user" component={User} />
        <PrivateRoute exact path="/collections" component={Collections} />
      </>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
