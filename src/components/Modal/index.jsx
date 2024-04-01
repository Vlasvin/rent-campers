import React, { Suspense, lazy, useEffect, useState } from "react";
import formatLocation from "helpers/formatLocation";

import {
  CloseButton,
  Description,
  IconContainer,
  IconLocation,
  IconStar,
  Image,
  Location,
  ModalContainer,
  ModalContent,
  Price,
  Rating,
  ReviewsCount,
  Title,
  ImageContainer,
  FeaturesBtn,
  ReviewsBtn,
  FeaturesContainer,
  ScrollBar,
  ActiveTabContainer,
} from "./styled";

const Features = lazy(() => import("components/Modal/Features"));
const Reviews = lazy(() => import("components/Modal/Reviews"));

const Modal = ({ closeModal, data }) => {
  const { name, rating, reviews, location, price, gallery, description } = data;
  const [activeTab, setActiveTab] = useState("");

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleFeaturesClick = () => {
    setActiveTab("features");
  };

  const handleReviewsClick = () => {
    setActiveTab("reviews");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <ModalContainer onClick={handleClickOutside}>
      <ModalContent>
        <ScrollBar>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <Title>{name}</Title>
          <IconContainer>
            <IconStar aria-label="edit icon" />
            <Rating>{rating}</Rating>
            <ReviewsCount>({reviews.length} Reviews)</ReviewsCount>
            <IconLocation aria-label="edit icon" />
            <Location>{formatLocation(location)}</Location>
          </IconContainer>
          <Price>€{Number(price).toFixed(2)}</Price>

          <ImageContainer>
            {gallery &&
              gallery.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`${name} Image ${index}`}
                />
              ))}
          </ImageContainer>
          <Description>{description}</Description>

          <FeaturesContainer>
            <FeaturesBtn
              onClick={handleFeaturesClick}
              active={activeTab === "features"}
            >
              Features
            </FeaturesBtn>
            <ReviewsBtn
              onClick={handleReviewsClick}
              active={activeTab === "reviews"}
            >
              Reviews
            </ReviewsBtn>
          </FeaturesContainer>
          <ActiveTabContainer>
            <Suspense fallback={<div>Loading...</div>}>
              {activeTab === "features" && <Features data={data} />}
              {activeTab === "reviews" && <Reviews reviews={reviews} />}
            </Suspense>
          </ActiveTabContainer>
        </ScrollBar>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
