import styled, { keyframes } from "styled-components";

// const moveDownBgAnimation = keyframes`
//   0%{background-position:91% 100%}
//   100%{background-position:10% 0%}
// `;

export const ProductFeature = styled.h4`
  color: #cccccc;
  font-size: 50px;
  margin: 0;
  text-align: left;
  span {
    display: block;
    font-size: 20px;
    margin-top: -15px;
  }
`;
export const ProductTitle = styled.h5`
  color: #5ac8fa;
  font-size: 32px;
  margin: 0 0 30px 0;
`;
export const ProductSlogan = styled.h2`
  font-size: 100px;
  color: #ffffff;
  text-align: left;
  line-height: 1.1;
  width: 630px;
  margin: 0 0 90px 0;
`;
export const ProductFeaturesContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
export const Column = styled.div`
  background: #ffffff;
  position: relative;
  display: block;
  width: 100px;
  flex-shrink: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const ProductCopyColumn = styled.div`
  background: #000;
  width: 100px;
  display: flex;
  width: 680px;
  flex-shrink: 0;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 80px;
  padding-top: 80px;
`;
export const ProductDisplay = styled.div`
  background: #000;
  /* height: 40vw; */
  height: 615px;
  width: 100%;
  display: flex;
`;

export const ProductIcon = styled.img`
  margin: 20px;
`;

export const ProductDisplayImage = styled.img`
  width: 920px;
  /* opacity: 0.7; */
`;

export const IconColumn = styled.div`
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 70px;
`;
export const ProductPage = styled.div`
  width: 1920px;
  background-color: #ffffff;
`;
export const ProductDisplaySection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2px;
`;

export const CallToActionSection = styled.div`
  min-height: 360px;
  height: 100%;
`;
export const NavBar = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  cursor: pointer;
  width: 100px;
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
  margin-right: 100px;
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
