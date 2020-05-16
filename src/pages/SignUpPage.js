import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  SignInWrapper,
  SignInFormWrapper,
  FooterText
} from "../components/SignInStyles";

function SignUpPage() {
  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Sign-Up</h2>
        <form>
          <label>Full Name</label>
          <input required type="text" placeholder="John Doe" />
          <label>Email</label>
          <input required type="email" placeholder="user@example.com" />
          <label>Password</label>
          <input required type="password" placeholder="***************" />
          <Button type="submit">Sign-Up</Button>
        </form>
        <FooterText leftAlign>
          Already registered? <Link to="/signin">Sign-In</Link>
        </FooterText>
      </SignInFormWrapper>
    </SignInWrapper>
  );
}

export default SignUpPage;
