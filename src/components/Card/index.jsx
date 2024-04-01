import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favoritesSlice";
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
  IconHeartFill,
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

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.includes(data._id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(data._id));
    } else {
      dispatch(addToFavorites(data._id));
    }
  };
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
            key={feature.key}
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
          {isFavorite ? (
            <IconHeartFill
              aria-label="edit icon"
              onClick={handleFavoriteToggle}
            />
          ) : (
            <IconHeart aria-label="edit icon" onClick={handleFavoriteToggle} />
          )}
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
