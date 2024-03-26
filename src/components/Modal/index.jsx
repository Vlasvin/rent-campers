import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

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
  Features,
  Reviews,
  FeaturesContainer,
} from "./styled";
import BookForm from "./BookForm";

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

        <Scrollbars style={{ width: "100%", height: 406 }}>
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
        </Scrollbars>

        <FeaturesContainer>
          <Features>Features</Features>
          <Reviews>Reviews</Reviews>
        </FeaturesContainer>
        <BookForm></BookForm>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
