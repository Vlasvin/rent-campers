import React from "react";
import { BoldText, Description, HomeContainer, Title } from "./styled";
import Card from "components/Card";
import Catalog from "components/Catalog";

const HomePage = () => {
  return (
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
      <Catalog></Catalog>
      {/* <Card></Card> */}
    </HomeContainer>
  );
};

export default HomePage;
