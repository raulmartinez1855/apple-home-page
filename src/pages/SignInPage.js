import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  SignInButton,
  SignInPageContainer,
  SignInFormWrapper,
  SignInForm,
  SignInLabel,
  SignInInput,
  SignInHeader,
  FooterText
} from "../styles/SignInStyles";
import { UserContext } from "../components/UserContext";

const initialState = { email: "", password: "" };

function SignInPage() {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const [form, setForm] = useState(initialState);

  const handleSignIn = e => {
    e.preventDefault();

    const isUser = form.email === user.email && form.password === user.password;

    if (isUser) {
      const userDetails = { ...user, loggedIn: true };
      window.sessionStorage.setItem("user", JSON.stringify(userDetails));
      setUser(userDetails);
      history.push("/apple");
    }
  };
  const handleInputChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <SignInPageContainer>
      <SignInFormWrapper>
        <SignInHeader>Sign-In</SignInHeader>
        <SignInForm onSubmit={handleSignIn}>
          <SignInLabel>Email</SignInLabel>
          <SignInInput
            required
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="user@example.com"
          />
          <SignInLabel>Password</SignInLabel>
          <SignInInput
            required
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="***************"
          />
          <SignInButton type="submit">Sign-In</SignInButton>
        </SignInForm>
        <FooterText>
          Not registered? <Link to="/signup">Sign-Up</Link>
        </FooterText>
      </SignInFormWrapper>
    </SignInPageContainer>
  );
}

export default SignInPage;
