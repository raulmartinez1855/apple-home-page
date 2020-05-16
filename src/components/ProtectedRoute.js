import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../components/UserContext";
function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props =>
        user.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
export default ProtectedRoute;
