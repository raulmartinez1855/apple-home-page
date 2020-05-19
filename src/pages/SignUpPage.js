import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  SignInButton,
  SignInFormWrapper,
  SignInPageContainer,
  SignInForm,
  SignInInput,
  SignInLabel,
  SignInHeader,
  FooterText
} from "../styles/SignInStyles";
import { UserContext } from "../components/UserContext";

const initialState = { email: "", name: "", password: "" };

function SignUpPage(props) {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const [form, setForm] = useState(initialState);

  const handleSignUp = e => {
    e.preventDefault();
    const userDetails = { ...form, loggedIn: false };
    window.sessionStorage.setItem("user", JSON.stringify(userDetails));
    setUser(userDetails);
    history.push("/signin");
  };
  const handleInputChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <SignInPageContainer>
      <SignInFormWrapper>
        <SignInHeader>Sign-Up</SignInHeader>
        <SignInForm onSubmit={handleSignUp}>
          <SignInLabel>Full Name</SignInLabel>
          <SignInInput
            required
            type="text"
            name="name"
            placeholder="John Doe"
            onChange={handleInputChange}
          />
          <SignInLabel>Email</SignInLabel>
          <SignInInput
            required
            type="email"
            name="email"
            placeholder="user@example.com"
            onChange={handleInputChange}
          />
          <SignInLabel>Password</SignInLabel>
          <SignInInput
            required
            type="password"
            name="password"
            minLength={8}
            placeholder="***************"
            onChange={handleInputChange}
          />
          <SignInButton type="submit">Sign-Up</SignInButton>
        </SignInForm>
        <FooterText leftAlign>
          Already registered? <Link to="/signin">Sign-In</Link>
        </FooterText>
      </SignInFormWrapper>
    </SignInPageContainer>
  );
}

export default SignUpPage;
