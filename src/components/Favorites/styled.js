import { Link } from "react-router-dom";
import styled from "styled-components";

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 260px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;
`;

export const Title = styled.h3`
  color: rgb(16, 24, 40);
`;

export const NoFavoritesMessage = styled.p`
  color: rgb(16, 24, 40);
  font-size: 36px;
  line-height: 1.5;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  display: grid;
  place-items: center;
  margin-top: 160px;
`;

export const LinkStyle = styled(Link)`
  color: rgb(228, 72, 72);
  font-size: 36px;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgb(216, 67, 67);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  width: 145px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 16px 32px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  cursor: pointer;
  background: transparent;
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
`;
