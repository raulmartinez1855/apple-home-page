import React, { useContext } from "react";
import {
  Column,
  NavBar,
  NavBarSpan,
  ProductTitle,
  ProductPage,
  NavBarContainer,
  ProductFeatureSpan,
  ProductFeature,
  SubscribeHeader,
  ProductSlogan,
  NavBarLogo,
  CallToActionSection,
  SubscribeSection,
  SubscribeButton,
  SubscribeInput,
  ProductDisplay,
  ProductFeaturesContainer,
  IconColumn,
  SubscribeForm,
  ProductIcon,
  PurchaseCallToAction,
  BuyNowLink,
  ProductCopyColumn,
  ProductDisplayImage,
  BackgroundImage,
  NavBarButton,
  ProductDisplaySection
} from "../styles/ProductPageStyles";
import { UserContext } from "../components/UserContext";

function AppleLandingPage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <ProductPage>
      <NavBar>
        <NavBarLogo alt="Apple Logo" src="/appleLogo.png" />
        <NavBarContainer>
          <NavBarSpan>iPhone</NavBarSpan>
          <NavBarSpan currentSelection>Macbook Pro</NavBarSpan>
          <NavBarSpan>Watch</NavBarSpan>
          <NavBarButton
            onClick={() => {
              const userDetails = { ...user, loggedIn: false };
              window.sessionStorage.setItem(
                "user",
                JSON.stringify(userDetails)
              );
              setUser(userDetails);
            }}
          >
            Logout
          </NavBarButton>
        </NavBarContainer>
      </NavBar>
      <ProductDisplaySection>
        <Column />
        <ProductDisplay>
          <ProductCopyColumn>
            <ProductTitle>Macbook Pro</ProductTitle>
            <ProductSlogan>More power. More pro</ProductSlogan>
            <ProductFeaturesContainer>
              <ProductFeature>
                8-core<ProductFeatureSpan>Intel processor</ProductFeatureSpan>
              </ProductFeature>
              <ProductFeature>
                32GB<ProductFeatureSpan>Memory</ProductFeatureSpan>
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
        <PurchaseCallToAction>
          <BuyNowLink>Buy Now &gt;</BuyNowLink>
        </PurchaseCallToAction>
        <BackgroundImage />
        <SubscribeSection>
          <SubscribeHeader>Subscribe Now</SubscribeHeader>
          <SubscribeForm onSubmit={e => e.preventDefault()}>
            <SubscribeInput type="text" placeholder="Enter the email address" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeSection>
      </CallToActionSection>
    </ProductPage>
  );
}

export default AppleLandingPage;
