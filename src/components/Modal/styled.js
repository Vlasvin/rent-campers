import styled from "styled-components";

import { ReactComponent as StarSvg } from "svg/icon_star.svg";
import { ReactComponent as LocationSvg } from "svg/map-pin.svg";

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  max-width: 902px;
  max-height: 1208px;
  padding: 40px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  margin: 15% auto;
`;

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: rgb(16, 24, 40);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const IconStar = styled(StarSvg)`
  width: 16px;
  height: 16px;
`;

export const Rating = styled.span`
  text-align: left;
  text-decoration-line: underline;
  margin-left: 4px;
`;

export const ReviewsCount = styled.span`
  color: rgb(16, 24, 40);
  text-align: left;
  text-decoration-line: underline;
`;

export const IconLocation = styled(LocationSvg)`
  width: 16px;
  height: 16px;
  margin-left: 11px;
`;

export const Location = styled.span`
  color: rgb(16, 24, 40);
  text-align: left;
`;

export const Price = styled.p`
  color: rgb(16, 24, 40);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 16px;
  margin-left: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Description = styled.p`
  color: rgb(71, 84, 103);
  margin-top: 24px;
  margin-bottom: 0;
  text-align: left;
`;

export const Features = styled.p`
  margin-top: 44px;
`;
export const Reviews = styled.p``;
