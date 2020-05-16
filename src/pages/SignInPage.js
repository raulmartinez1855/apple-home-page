import React from "react";
import { Link } from "react-router-dom";
import { Button, SignInWrapper, SignInFormWrapper } from "../components/SignInStyles";

function SignInPage() {
  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Sign-In</h2>
        <form>
          <label>Email</label>
          <input required type="email" placeholder="user@example.com" />
          <label>Password</label>
          <input required placeholder="***************" />
          <Button type="submit">Sign-In</Button>
        </form>
      </SignInFormWrapper>
      <p>
        Not registered? <Link to="/signup">Sign-Up</Link>
      </p>
    </SignInWrapper>
  );
}

export default SignInPage;
