import React, { useContext } from "react";
import {
  Column,
  NavBar,
  NavBarSpan,
  ProductTitle,
  ProductPage,
  ProductFeature,
  ProductSlogan,
  NavBarLogo,
  CallToActionSection,
  ProductDisplay,
  ProductFeaturesContainer,
  IconColumn,
  ProductIcon,
  ProductCopyColumn,
  ProductDisplayImage,
  NavBarButton,
  ProductDisplaySection
} from "../styles/ProductPageStyles";
import { UserContext } from "../components/UserContext";

function AppleLandingPage() {
  const { user } = useContext(UserContext);

  return (
    <ProductPage>
      <NavBar>
        <NavBarLogo alt="Apple Logo" src="/appleLogo.png" />
        <div>
          <NavBarSpan>iPhone</NavBarSpan>
          <NavBarSpan currentSelection>Macbook Pro</NavBarSpan>
          <NavBarSpan>Watch</NavBarSpan>
          <NavBarButton>Notify Me</NavBarButton>
        </div>
      </NavBar>
      <ProductDisplaySection>
        <Column />
        <ProductDisplay>
          <ProductCopyColumn>
            <ProductTitle>Macbook Pro</ProductTitle>
            <ProductSlogan>More power. More pro</ProductSlogan>
            <ProductFeaturesContainer>
              <ProductFeature>
                8-core<span>Intel processor</span>
              </ProductFeature>
              <ProductFeature>
                32GB<span>Memory</span>
              </ProductFeature>
            </ProductFeaturesContainer>
          </ProductCopyColumn>
          <ProductDisplayImage alt="Apple Logo" src="/macBookPro.png" />
          <IconColumn>
            <ProductIcon alt="IPhone Icon" src="/iphoneIcon.png" />
            <ProductIcon alt="Macbook Pro Icon" src="/macBookProIcon.png" />
            <ProductIcon alt="Apple Watch Icon" src="/appleWatchIcon.png" />
          </IconColumn>
        </ProductDisplay>
      </ProductDisplaySection>
      <CallToActionSection>
        <Column />
        <div>hello</div>
      </CallToActionSection>
    </ProductPage>
  );
}

export default AppleLandingPage;
