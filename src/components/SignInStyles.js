import styled from "styled-components";

export const Button = styled.button`
  background: #000;
  border-radius: 3px;
  border: none;
  color: white;
`;

export const SignInWrapper = styled.div`
  background: linear-gradient(#5ac8fa 10%, white 60%);
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignInFormWrapper = styled.div`
  background: white;
  height: 510px;
  width: 494px;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  input {
    width: 411px;
    height: 58px;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 10px;
  }
  button {
    width: 174px;
    height: 58px;
  }
`;
