import React from "react";

import Layout from "components/Layout";
import { BoldText, Description, HomeContainer, Title } from "./styled";

const HomePage = () => {
  return (
    <Layout>
      <HomeContainer>
        <Title>Ласкаво просимо до нашої компанії з оренди кемперів!</Title>
        <Description>
          Ми пропонуємо широкий вибір кемперів різної комплектації для
          незабутнього відпочинку та подорожей. Звертайтеся до нас і отримайте
          можливість відкрити для себе нові місця та враження!
        </Description>
        <Description>
          Наші послуги включають в себе <BoldText>оренду кемперів</BoldText>,{" "}
          <BoldText>консультації щодо вибору маршруту</BoldText>, а також
          можливість <BoldText>поставки кемпера</BoldText> за необхідні адреси.
        </Description>
      </HomeContainer>
    </Layout>
  );
};

export default HomePage;
