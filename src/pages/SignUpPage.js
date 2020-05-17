import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  SignInWrapper,
  SignInFormWrapper,
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
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSignUp}>
          <label>Full Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="John Doe"
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="user@example.com"
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="***************"
            onChange={handleInputChange}
          />
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
