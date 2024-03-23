import React, { useState } from "react";

import {
  CampersTypeLabel,
  CheckboxContainer,
  CheckboxIcon,
  CheckboxInput,
  CheckboxLabel,
  EquipmentLabel,
  LocationInput,
  RadioButtonContainer,
  RadioButtonInput,
  RadioButtonLabel,
  SearchButton,
  SidebarContainer,
} from "./styled";

const Sidebar = ({ handleSearch }) => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState({
    airConditioner: false,
    transmission: false,
    kitchen: false,
    TV: false,
    shower: false,
  });
  const [campersType, setCampersType] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    const { name, checked } = event.target;
    setEquipment((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleCampersTypeChange = (event) => {
    setCampersType(event.target.value);
  };

  const handleFilterSearch = () => {
    // Передаємо значення фільтрів до батьківського компоненту для подальшої обробки
    handleSearch({ location, equipment, campersType });
  };

  return (
    <SidebarContainer>
      <LocationInput
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />
      <EquipmentLabel>Equipment:</EquipmentLabel>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="kitchen"
          name="kitchen"
          checked={equipment.kitchen}
          onChange={handleEquipmentChange}
        />
        <CheckboxLabel>
          <CheckboxIcon />
          Kitchen
        </CheckboxLabel>
      </CheckboxContainer>
      <CampersTypeLabel>Campers Type:</CampersTypeLabel>
      <RadioButtonContainer>
        <RadioButtonInput
          type="radio"
          id="type1"
          name="campersType"
          value="type1"
          checked={campersType === "type1"}
          onChange={handleCampersTypeChange}
        />
        <RadioButtonLabel>Type 1</RadioButtonLabel>
      </RadioButtonContainer>
      <SearchButton onClick={handleFilterSearch}>Search</SearchButton>
    </SidebarContainer>
  );
};

export default Sidebar;
