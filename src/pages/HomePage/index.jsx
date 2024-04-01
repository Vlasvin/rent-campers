import React from "react";

import Layout from "components/Layout";

import {
  BackgroundImage,
  DarkOverlay,
  Description,
  HomeContainer,
  Title,
} from "./styled";

const HomePage = () => {
  return (
    <Layout>
      <BackgroundImage>
        <HomeContainer>
          <DarkOverlay />
          <Title>Welcome to our camper rental company!</Title>
          <Description>
            We offer a wide selection of campers with various amenities for
            unforgettable relaxation and travel experiences. Contact us and get
            the opportunity to discover new places and impressions!
          </Description>
        </HomeContainer>
      </BackgroundImage>
    </Layout>
  );
};

export default HomePage;
