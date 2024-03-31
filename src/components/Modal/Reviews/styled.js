import styled from "styled-components";

import { ReactComponent as StarSvg } from "pictures/svg/icon_star.svg";
import { ReactComponent as EmptyStarSvg } from "pictures/svg/icon_star_empty.svg";

export const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 44px;
`;

export const ReviewList = styled.div`
  flex: 1;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  margin-bottom: 20px;
`;

export const PersonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const PersonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: rgb(228, 72, 72);
  background: rgb(242, 244, 247);
  width: 60px;
  height: 60px;
`;

export const ReviewContent = styled.div`
  flex: 1;
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 4px;
`;

export const ReviewName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const StarFilled = styled(StarSvg)`
  width: 16px;
  height: 16px;
`;

export const StarOutlined = styled(EmptyStarSvg)`
  width: 16px;
  height: 16px;
`;

export const ReviewText = styled.p`
  margin: 0;
`;

export const BookFormContainer = styled.div`
  flex: 1;
`;
