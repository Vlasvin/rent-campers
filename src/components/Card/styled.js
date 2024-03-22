import styled from "styled-components";

import { ReactComponent as EmptyHeartSvg } from "svg/empty-heart.svg";
import { ReactComponent as StarSvg } from "svg/icon_star.svg";
import { ReactComponent as LocationSvg } from "svg/map-pin.svg";
import { ReactComponent as AdultsSvg } from "svg/Users.svg";
import { ReactComponent as TransmissionSvg } from "svg/Automatic.svg";
import { ReactComponent as EngineSvg } from "svg/Vector.svg";
import { ReactComponent as KitchenSvg } from "svg/Kitchen.svg";
import { ReactComponent as BedSvg } from "svg/Bed.svg";
import { ReactComponent as ACSvg } from "svg/AC.svg";

export const CardContainer = styled.div`
  margin-top: 32px;
  display: flex;
  width: 888px;
  height: 358px;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  background: rgb(255, 255, 255);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-left: 24px;
`;

export const TitlePriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
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

export const Price = styled.p`
  color: rgb(16, 24, 40);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin: 0;
  margin-left: auto;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const IconHeart = styled(EmptyHeartSvg)`
  width: 24px;
  height: 24px;
  margin: 3px 2.5px 3px 11px;
`;
export const IconLocation = styled(LocationSvg)`
  width: 16px;
  height: 16px;
  margin-left: 11px;
`;
export const IconAdults = styled(AdultsSvg)`
  width: 20px;
  height: 20px;
`;
export const IconTransmission = styled(TransmissionSvg)`
  width: 20px;
  height: 20px;
`;
export const IconEngine = styled(EngineSvg)`
  width: 20px;
  height: 20px;
`;
export const IconKitchen = styled(KitchenSvg)`
  width: 20px;
  height: 20px;
`;
export const IconBed = styled(BedSvg)`
  width: 20px;
  height: 20px;
`;
export const IconAC = styled(ACSvg)`
  width: 20px;
  height: 20px;
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

export const Location = styled.span`
  color: rgb(16, 24, 40);
  text-align: left;
`;

export const Description = styled.p`
  color: rgb(71, 84, 103);
  margin-top: 24px;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 8px;
`;

export const FeatureButton = styled.button`
  height: 44px;
  border-radius: 100px;
  background: rgb(242, 244, 247);
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 12px 18px 12px 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ShowMoreBtn = styled.button`
  width: 166px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px 16px 40px;
  margin-top: 24px;
  border-radius: 200px;
  color: rgb(255, 255, 255);
  background: rgb(228, 72, 72);
  border: none;
`;
