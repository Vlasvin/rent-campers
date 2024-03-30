import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 44px;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const VehicleDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 44px;
  margin-bottom: 0;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  padding-top: 24px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
export const Detail = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;
