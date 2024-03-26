import React from "react";

import Layout from "components/Layout";
import {
  BackgroundImage,
  BoldText,
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
          <Title>Ласкаво просимо до нашої компанії з оренди кемперів!</Title>
          <Description>
            Ми пропонуємо широкий вибір кемперів різної комплектації для
            незабутнього відпочинку та подорожей. Звертайтеся до нас і отримайте
            можливість відкрити для себе нові місця та враження!
          </Description>
          <Description>
            Наші послуги включають в себе <BoldText>оренду кемперів</BoldText>,{" "}
            <BoldText>консультації щодо вибору кемперів та маршруту</BoldText>.
          </Description>
        </HomeContainer>
      </BackgroundImage>
    </Layout>
  );
};

export default HomePage;
