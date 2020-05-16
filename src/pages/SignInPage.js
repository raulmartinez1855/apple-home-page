import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  SignInWrapper,
  SignInFormWrapper,
  FooterText
} from "../components/SignInStyles";
import { UserContext } from "../components/UserContext";

const initialState = { email: "", password: "" };

function SignInPage() {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const [form, setForm] = useState(initialState);

  const handleSignIn = e => {
    e.preventDefault();
    console.log({ form, user });

    if (form.email === user.email && form.password === user.password) {
      const userDetails = { ...user, loggedIn: true };
      window.localStorage.setItem("user", userDetails);
      setUser(userDetails);
      history.push("/apple");
    }
  };
  const handleInputChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Sign-In</h2>
        <form onSubmit={handleSignIn}>
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="user@example.com"
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="***************"
          />
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
