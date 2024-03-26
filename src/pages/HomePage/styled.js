import styled from "styled-components";
import KemperImg from "svg/Kemper.jpeg";

export const HomeContainer = styled.div`
  max-width: 1000px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 34px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${KemperImg});
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.5;
`;

export const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;
