import styled, { keyframes } from "styled-components";

const moveDownBgAnimation = keyframes`  
  0%{background-position:91% 100%}  
  100%{background-position:10% 0%}
`;
const fadeInAnimation = keyframes`  
  0%{opacity: 0}  
  100%{opacity: 1}  
`;

export const Button = styled.button`
  background: #000;
  border: none;
  color: white;
  width: 174px;
  height: 58px;
  align-self: center;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #5ac8fa;
    top: 0;
    left: -100%;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  &:after {
    bottom: 0 !important;
    top: auto !important;
    right: -100%;
    left: auto;
  }

  &:hover:before {
    left: 0;
  }

  &:hover:after {
    right: 0;
  }
`;

export const SignInWrapper = styled.div`
  background: linear-gradient(#5ac8fa 10%, white 30%);
  background-size: 200% 200%;
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: 1s ${moveDownBgAnimation} ease-out;
`;
export const FooterText = styled.p`
  font-size: 14px;
  position: absolute;
  bottom: -45px;
  text-align: ${props => (props.leftAlign ? "left" : "right")};
  width: 100%;
`;

export const SignInFormWrapper = styled.div`
  animation: 1s ${fadeInAnimation} ease-in;
  background: white;
  padding: 50px 0;
  margin: 0;
  position: relative;
  -webkit-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 510px;
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
    width: 65vw;
    max-width: 411px;
    height: 58px;
    border: 1px solid #707070;
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 15px;
    ::placeholder {
      color: #cccccc;
      letter-spacing: 2px;
    }
  }
  label {
    margin-bottom: 10px;
  }
`;
