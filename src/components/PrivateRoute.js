import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const userSignin = useSelector((state) => state.userSignin);
    const { user } = userSignin;
    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props}></Component>
                ) : (
                    <Redirect to="/signin"></Redirect>
                )
            }
        ></Route>
    );
}

export default PrivateRoute;
