import React, { useContext } from "react";
import {
  Column,
  NavBar,
  NavBarSpan,
  ProductDisplay,
  NavBarButton,
  ProductDisplaySection
} from "../styles/ProductPageStyles";
import { UserContext } from "../components/UserContext";
import { Link } from "react-router-dom";

function AppleLandingPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar>
        <img alt="Apple Logo" src="/appleLogo.png" />
        <div>
          {/* <Link> */}
          <NavBarSpan>iPhone</NavBarSpan>
          {/* </Link> */}
          {/* <Link> */}
          <NavBarSpan currentSelection>Macbook Pro</NavBarSpan>
          {/* </Link> */}
          {/* <Link> */}
          <NavBarSpan>Watch</NavBarSpan>
          {/* </Link> */}
          <NavBarButton>Notify Me</NavBarButton>
        </div>
      </NavBar>
      <ProductDisplaySection>
        <Column />
        <ProductDisplay />
      </ProductDisplaySection>
    </>
  );
}

export default AppleLandingPage;
