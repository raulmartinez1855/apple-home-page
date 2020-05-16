import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  SignInWrapper,
  SignInFormWrapper,
  FooterText
} from "../components/SignInStyles";

function SignInPage() {
  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Sign-In</h2>
        <form>
          <label>Email</label>
          <input required type="email" placeholder="user@example.com" />
          <label>Password</label>
          <input required type="password" placeholder="***************" />
          <Button type="submit">Sign-In</Button>
        </form>
        <FooterText>
          Not registered? <Link to="/signup">Sign-Up</Link>
        </FooterText>
      </SignInFormWrapper>
    </SignInWrapper>
  );
}

export default SignInPage;
