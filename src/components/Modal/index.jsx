import React from "react";
// import { Scrollbar } from "react-scrollbars-custom";

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
} from "./styled";

const Modal = ({ closeModal, data }) => {
  const { name, rating, reviews, location, price, gallery, description } = data;
  return (
    <ModalContainer>
      {/* <Scrollbar style={{ width: "100%", height: "100%" }}> */}
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
        <Features>Features</Features>
        <Reviews>Reviews</Reviews>
      </ModalContent>
      {/* </Scrollbar> */}
    </ModalContainer>
  );
};

export default Modal;
