import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
}
