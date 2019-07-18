import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ email, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            email ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

function mapStateToProps(state) {
    return {
        email: state.email
    };
  };
  
  export default connect(mapStateToProps)(PrivateRoute)