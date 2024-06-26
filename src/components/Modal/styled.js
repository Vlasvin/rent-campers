import styled from "styled-components";

import { ReactComponent as StarSvg } from "pictures/svg/icon_star.svg";
import { ReactComponent as LocationSvg } from "pictures/svg/map-pin.svg";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  width: 902px;
  height: 720px;
  padding: 40px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  margin: 14% auto;
`;

export const ScrollBar = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 720px;
  padding-right: 8px;
  &::-webkit-scrollbar {
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const CloseButton = styled.span`
  color: rgb(16, 24, 40);
  float: right;
  font-size: 32px;
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

  &::last-child {
    margin-right: 0;
  }
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

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  margin-top: 44px;
`;

export const FeaturesBtn = styled.p`
  color: rgb(16, 24, 40);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  cursor: pointer;
  margin-bottom: ${({ active }) => (active ? "0" : "23px")};
  padding-bottom: ${({ active }) => (active ? "18px" : "0")};
  border-bottom: ${({ active }) =>
    active ? "5px solid rgb(228, 72, 72)" : "none"};
`;

export const ReviewsBtn = styled.p`
  color: rgb(16, 24, 40);
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  margin-bottom: ${({ active }) => (active ? "0" : "23px")};
  padding-bottom: ${({ active }) => (active ? "18px" : "0")};
  border-bottom: ${({ active }) =>
    active ? "5px solid rgb(228, 72, 72)" : "none"};
`;

export const ActiveTabContainer = styled.div``;
