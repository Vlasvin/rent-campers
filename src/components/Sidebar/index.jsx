import React, { useState } from "react";

import { ReactComponent as ACSvg } from "svg/AC.svg";
import { ReactComponent as AutomaticSvg } from "svg/Automatic.svg";
import { ReactComponent as KitchenSvg } from "svg/Kitchen.svg";
import { ReactComponent as TVSvg } from "svg/TV.svg";
import { ReactComponent as ShowerWCSvg } from "svg/Shower.svg";
import { ReactComponent as VanSvg } from "svg/Van.svg";
import { ReactComponent as FullyIntegratedSvg } from "svg/Full-integrated.svg";
import { ReactComponent as AlcoveSvg } from "svg/Alcove.svg";
import {
  CampersTypeLabel,
  CheckboxButton,
  CheckboxContainer,
  CheckboxIcon,
  CheckboxLabel,
  EquipmentLabel,
  FiltersLabel,
  LocationIcon,
  LocationInput,
  LocationInputContainer,
  LocationLabel,
  RadioButtonContainer,
  RadioButton,
  SearchButton,
  SidebarContainer,
  RadioButtonLabel,
} from "./styled";

const Sidebar = ({ handleSearch }) => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    "Shower/WC": false,
  });
  const [campersType, setCampersType] = useState("");

  const camperTypes = [
    { value: "Van", label: "Van", icon: <VanSvg /> },
    {
      value: "Fully Integrated",
      label: "Fully Integrated",
      icon: <FullyIntegratedSvg />,
    },
    { value: "Alcove", label: "Alcove", icon: <AlcoveSvg /> },
  ];

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEquipmentChange = (name) => {
    setEquipment((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleCampersTypeChange = (event) => {
    setCampersType(event);
  };

  const handleFilterSearch = () => {
    // Передаємо значення фільтрів до батьківського компоненту для подальшої обробки
    handleSearch({ location, equipment, campersType });
  };

  return (
    <SidebarContainer>
      <LocationLabel>Location</LocationLabel>
      <LocationInputContainer>
        <LocationIcon />
        <LocationInput
          type="text"
          placeholder="City"
          value={location}
          onChange={handleLocationChange}
        />
      </LocationInputContainer>
      <FiltersLabel>Filters</FiltersLabel>
      <EquipmentLabel>Vehicle equipment:</EquipmentLabel>
      <CheckboxContainer>
        {Object.entries(equipment).map(([key, value]) => (
          <CheckboxButton
            key={key}
            checked={value}
            onClick={() => handleEquipmentChange(key)}
          >
            <CheckboxIcon icon={key}>
              {key === "AC" && <ACSvg />}
              {key === "Automatic" && <AutomaticSvg />}
              {key === "Kitchen" && <KitchenSvg />}
              {key === "TV" && <TVSvg />}
              {key === "Shower/WC" && <ShowerWCSvg />}
            </CheckboxIcon>
            <CheckboxLabel>{key}</CheckboxLabel>
          </CheckboxButton>
        ))}
      </CheckboxContainer>
      <CampersTypeLabel>Vehicle type</CampersTypeLabel>
      <RadioButtonContainer>
        {camperTypes.map(({ value, label, icon }) => (
          <RadioButton
            key={value}
            onClick={() => handleCampersTypeChange(value)}
            active={campersType === value}
          >
            {icon}
            <RadioButtonLabel>{label}</RadioButtonLabel>
          </RadioButton>
        ))}
      </RadioButtonContainer>
      <SearchButton onClick={handleFilterSearch}>Search</SearchButton>
    </SidebarContainer>
  );
};

export default Sidebar;
