// import React, { useState } from "react";
import formatLocation from "helpers/formatLocation";
import FeatureButton from "./FeatureButton";

import {
  CardContainer,
  Content,
  IconHeart,
  IconStar,
  IconContainer,
  IconLocation,
  Image,
  Location,
  Price,
  Rating,
  ReviewsCount,
  Title,
  Description,
  ShowMoreBtn,
  FeaturesContainer,
  TitlePriceContainer,
} from "./styled";

const Card = ({ data, openModal }) => {
  const {
    gallery,
    name,
    price,
    rating,
    location,
    description,
    details,
    reviews,
  } = data;

  const renderFeatureButtons = () => {
    const limitedFeatures = [
      { key: "adults", label: "Adults" },
      { key: "transmission", label: "Transmission" },
      { key: "engine", label: "Engine" },
      { key: "kitchen", label: "Kitchen" },
      { key: "beds", label: "Beds" },
      { key: "airConditioner", label: "Air Conditioner" },
    ];
    const featureButtons = [];
    for (const feature of limitedFeatures) {
      const featureValue = data[feature.key] || details[feature.key];
      if (featureValue !== undefined) {
        featureButtons.push(
          <FeatureButton
            feature={feature.key}
            value={featureValue}
            icon={feature.key}
          />
        );
      }
    }
    return featureButtons;
  };

  return (
    <CardContainer key={data._id}>
      <Image src={gallery ? gallery[0] : ""} alt={name} />
      <Content>
        <TitlePriceContainer>
          <Title>{name}</Title>
          <Price>€{Number(price).toFixed(2)}</Price>
          <IconHeart aria-label="edit icon" />
        </TitlePriceContainer>

        <IconContainer>
          <IconStar aria-label="edit icon" />
          <Rating>{rating}</Rating>
          <ReviewsCount>({reviews.length} Reviews)</ReviewsCount>
          <IconLocation aria-label="edit icon" />
          <Location>{formatLocation(location)}</Location>
        </IconContainer>

        <Description>{description}</Description>
        <FeaturesContainer>{renderFeatureButtons()}</FeaturesContainer>

        <ShowMoreBtn onClick={() => openModal(data)}>Show more</ShowMoreBtn>
      </Content>
    </CardContainer>
  );
};

export default Card;
