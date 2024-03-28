import React, { useEffect } from "react";

import formatLocation from "helpers/formatLocation";
import BookForm from "./BookForm";
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
  Features,
  Reviews,
  FeaturesContainer,
  ScrollBar,
} from "./styled";

const Modal = ({ closeModal, data }) => {
  const { name, rating, reviews, location, price, gallery, description } = data;

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
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
        <ScrollBar>
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
            <Features>Features</Features>
            <Reviews>Reviews</Reviews>
          </FeaturesContainer>
          <BookForm></BookForm>
        </ScrollBar>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
