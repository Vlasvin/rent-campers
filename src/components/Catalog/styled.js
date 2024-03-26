import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 160px;
  padding-bottom: 64px;
`;

export const SidebarContainer = styled.div`
  width: 360px;
  margin-right: 64px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
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
