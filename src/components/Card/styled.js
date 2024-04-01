import styled from "styled-components";

import { ReactComponent as EmptyHeartSvg } from "pictures/svg/empty-heart.svg";
import { ReactComponent as FillHeartSvg } from "pictures/svg/Red-heart.svg";
import { ReactComponent as StarSvg } from "pictures/svg/icon_star.svg";
import { ReactComponent as LocationSvg } from "pictures/svg/map-pin.svg";
import { ReactComponent as AdultsSvg } from "pictures/svg/Users.svg";
import { ReactComponent as TransmissionSvg } from "pictures/svg/Automatic.svg";
import { ReactComponent as EngineSvg } from "pictures/svg/Vector.svg";
import { ReactComponent as KitchenSvg } from "pictures/svg/Kitchen.svg";
import { ReactComponent as BedSvg } from "pictures/svg/Bed.svg";
import { ReactComponent as ACSvg } from "pictures/svg/AC.svg";
import { ReactComponent as TVSvg } from "pictures/svg/TV.svg";
import { ReactComponent as CDSvg } from "pictures/svg/CD.svg";
import { ReactComponent as RadioSvg } from "pictures/svg/Radio.svg";
import { ReactComponent as ToiletSvg } from "pictures/svg/Toilet.svg";
import { ReactComponent as FreezerSvg } from "pictures/svg/arcticons_freezer.svg";
import { ReactComponent as HobSvg } from "pictures/svg/Hob.svg";
import { ReactComponent as MicrowaveSvg } from "pictures/svg/Microwave.svg";
import { ReactComponent as GasSvg } from "pictures/svg/mdi_gas.svg";
import { ReactComponent as WaterSvg } from "pictures/svg/ion_water-outline.svg";
import { ReactComponent as ShowerSvg } from "pictures/svg/Shower.svg";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
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
export const IconHeartFill = styled(FillHeartSvg)`
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
export const IconTV = styled(TVSvg)`
  width: 20px;
  height: 20px;
`;
export const IconCD = styled(CDSvg)`
  width: 20px;
  height: 20px;
`;
export const IconRadio = styled(RadioSvg)`
  width: 20px;
  height: 20px;
`;
export const IconToilet = styled(ToiletSvg)`
  width: 20px;
  height: 20px;
`;
export const IconFreezer = styled(FreezerSvg)`
  width: 20px;
  height: 20px;
`;
export const IconHob = styled(HobSvg)`
  width: 20px;
  height: 20px;
`;
export const IconMicrowave = styled(MicrowaveSvg)`
  width: 20px;
  height: 20px;
`;
export const IconGas = styled(GasSvg)`
  width: 20px;
  height: 20px;
`;
export const IconWater = styled(WaterSvg)`
  width: 20px;
  height: 20px;
`;
export const IconShower = styled(ShowerSvg)`
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

  &:hover {
    background: rgb(216, 67, 67);
  }
`;
