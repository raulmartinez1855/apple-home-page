import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import ProtectedRoute from "./ProtectedRoute";
import AppleLandingPage from "../pages/AppleLandingPage";
import { UserContext } from "./UserContext";

const currentUser = JSON.parse(window.sessionStorage.getItem("user"));
const initialState = currentUser || {
  name: "",
  email: "",
  password: "",
  loggedIn: false
};

export default function AppRouter() {
  const [user, setUser] = useState(initialState);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route exact path="/" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} />
          <ProtectedRoute exact path="/apple" component={AppleLandingPage} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}
