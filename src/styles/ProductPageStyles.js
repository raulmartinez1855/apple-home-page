import styled, { keyframes } from "styled-components";

const moveDownBgAnimation = keyframes`  
  0%{background-position:91% 100%}  
  100%{background-position:10% 0%}
`;

export const Column = styled.div`
  background: blue;
  position: relative;
  display: block;
  width: 100px;
  flex-shrink: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const ProductDisplay = styled.div`
  background: black;
  height: 615px;
  width: 100%;
`;
export const ProductDisplaySection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2px;
`;

export const NavBar = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
    width: 100px;
  }
`;
export const NavBarSpan = styled.span`
  margin: 0 20px;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  color: ${props => (props.currentSelection ? "#000" : "#707070")};
  font-weight: ${props => (props.currentSelection ? "700" : "400")};
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => (props.currentSelection ? "#000" : "#707070")};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const NavBarButton = styled.button`
  border-radius: 30px;
  padding: 13px 38px;
  border: 3px solid #ffffff;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  background-color: #5ac8fa;
  transition: all 100ms ease-in;
  &:hover {
    border: 3px solid #5ac8fa;
    background-color: #ffffff;
    color: #5ac8fa;
    -webkit-box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);
  }
`;
