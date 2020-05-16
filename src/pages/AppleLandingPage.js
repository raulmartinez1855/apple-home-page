import React, { useContext } from "react";
import { SignInWrapper, SignInFormWrapper } from "../components/SignInStyles";
import { UserContext } from "../components/UserContext";

function SignUpPage(props) {
  const { user } = useContext(UserContext);

  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <h2>Welcome, {user.name}</h2>
      </SignInFormWrapper>
    </SignInWrapper>
  );
}

export default SignUpPage;
