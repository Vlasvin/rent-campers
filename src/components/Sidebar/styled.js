import styled from "styled-components";
import { ReactComponent as LocationSvg } from "pictures/svg/map-pin.svg";

export const SidebarContainer = styled.div`
  width: 360px;
  border-radius: 10px;
`;

export const LocationInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 32px;
`;

export const LocationLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-weight: 500;
`;

export const LocationIcon = styled(LocationSvg)`
  position: absolute;
  width: 18px;
  height: 20px;
  left: 18px;
  top: 42%;
  transform: translateY(-50%);
`;

export const LocationInput = styled.input`
  width: calc(100% - 36px);
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 18px 18px 44px;
  border-radius: 10px;
  background: rgb(247, 247, 247);
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  font-size: 16px;
  border: none;
  color: ${({ value }) =>
    value ? "rgb(16, 24, 40)" : "rgba(16, 24, 40, 0.6)"};
  ::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const FiltersLabel = styled.label`
  margin-bottom: 14px;
  color: rgb(71, 84, 103);
  font-weight: 500;
`;

export const EquipmentLabel = styled.label`
  display: block;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  padding-bottom: 24px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 32px;
`;

export const CheckboxLabel = styled.span`
  color: rgb(16, 24, 40);
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;
`;
export const CheckboxButton = styled.button`
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 17px 18px 17px 18px;
  border-radius: 10px;
  border: 1px solid
    ${({ checked }) => (checked ? "rgb(228, 72, 72)" : "rgba(16, 24, 40, 0.2)")};
  background: none;
  cursor: pointer;
`;

export const CheckboxIcon = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const CampersTypeLabel = styled.label`
  display: block;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  padding-bottom: 24px;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const RadioButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 128px;
  height: 95px;
  padding: 8px 30px 8px 30px;
  border: 1px solid
    ${(props) => (props.active ? "rgb(228, 72, 72)" : "rgba(16, 24, 40, 0.2)")};
  border-radius: 10px;
  background: none;

  svg {
    width: 40px;
    height: 28px;
  }
`;

export const RadioButtonLabel = styled.span`
  color: rgb(16, 24, 40);
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;
`;

export const SearchButton = styled.button`
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
