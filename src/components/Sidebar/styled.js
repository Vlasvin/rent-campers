import styled from "styled-components";
import { ReactComponent as LocationIcon } from "svg/location.svg";
import { ReactComponent as KitchenIcon } from "svg/Kitchen.svg";

export const SidebarContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
`;

export const LocationInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: url(${LocationIcon});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  font-size: 16px;
`;

export const EquipmentLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const CheckboxLabel = styled.span`
  display: flex;
  align-items: center;
`;

export const CheckboxIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const CampersTypeLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonInput = styled.input`
  margin-right: 5px;
`;

export const RadioButtonLabel = styled.span``;

export const SearchButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
