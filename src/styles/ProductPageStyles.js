import styled, { keyframes } from "styled-components";

const negativeMarginTop = keyframes`
  0%{margin-top:0}
  100%{margin-top:-130px}
`;
const translateXleft = keyframes`
  0%{transform: translateX(200px)}
  100%{transform: translateX(0)}
`;

export const ProductFeatureSpan = styled.span`
  display: block;
  font-size: 20px;
  margin-top: -15px;
  font-family: "Poppins";
`;
export const ProductFeature = styled.h4`
  color: #cccccc;
  font-size: 50px;
  margin: 0;
  font-family: "Poppins-Bold";
  text-align: left;
`;
export const ProductTitle = styled.h5`
  color: #5ac8fa;
  font-size: 32px;
  font-family: "Poppins-Bold";
  margin: 0 0 30px 0;
`;
export const ProductSlogan = styled.h2`
  font-size: 100px;
  color: #ffffff;
  text-align: left;
  font-family: "Poppins-Bold";
  line-height: 1.1;
  width: 640px;
  margin: 0 0 90px 0;
`;
export const SubscribeButton = styled.button`
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins-Bold";
  background-color: #000;
  width: 174px;
  height: 59px;
  margin-left: 15px;
`;
export const SubscribeInput = styled.input`
  height: 55px;
  width: 394px;
  padding: 0 15px;
  color: #000;
  font-size: 14px;
  ::placeholder {
    color: #cccccc;
    font-size: 14px;
  }
`;
export const SubscribeForm = styled.form``;
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
  * {
    animation: 1s ${translateXleft} ease-out forwards;
  }
`;
export const ProductDisplay = styled.div`
  background: #000;
  height: 615px;
  width: 100%;
  display: flex;
`;

export const ProductIcon = styled.img`
  margin: 20px;
  cursor: pointer;
  transition: all 150ms ease-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductDisplayImage = styled.img`
  width: 920px;
  opacity: 0.7;
  transition: all 150ms ease;
  &:hover {
    opacity: 1;
  }
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
  height: 100%;
  min-height: 1080px;
  background-color: #ffffff;
`;
export const ProductDisplaySection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2px;
`;

export const BuyNowLink = styled.span`
  color: #5ac8fa;
  font-size: 20px;
  margin-left: 10px;
  font-family: "Poppins-SemiBold";
`;
export const PurchaseCallToAction = styled.div`
  width: 450px;
  flex-shrink: 0;
`;
export const CallToActionSection = styled.div`
  background-color: #ffffff;
  min-height: 280px;
  padding-top: 80px;
  display: flex;
  justify-content: flex-start;
`;

export const SubscribeHeader = styled.h2`
  font-size: 36px;
  font-family: "Poppins-bold";
  margin: 0 0 10px 0;
`;
export const SubscribeSection = styled.div`
  padding: 70px 0 70px 105px;
  width: 100%;
  position: relative;
  text-align: left;
  background: #f2f2f2;
  height: 180px;
  animation: 1s ${negativeMarginTop} ease-out forwards;
`;
export const BackgroundImage = styled.div`
  background: url("/macDesk2.png");
  background-size: cover;
  background-position: bottom;
  flex-shrink: 0;
  width: 670px;
`;

export const NavBarContainer = styled.div``;

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
  font-family: ${props =>
    props.currentSelection ? "Poppins-Bold" : "Poppins"};
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
