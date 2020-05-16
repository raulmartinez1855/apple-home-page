import React from "react";
import { Route, Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div>
      <form>
        <label>Full Name</label>
        <input />
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button>Sign-In</button>
      </form>
      <p>
        Not registered? <Link to="/signup">Sign-Up</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
