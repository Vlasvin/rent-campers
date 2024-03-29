import React from "react";

import {
  FeatureButton as StyledFeatureButton,
  IconAdults,
  IconTransmission,
  IconEngine,
  IconKitchen,
  IconBed,
  IconAC,
  IconShower,
  IconTV,
  IconCD,
  IconRadio,
  IconToilet,
  IconFreezer,
  IconHob,
  IconMicrowave,
  IconGas,
  IconWater,
} from "components/Card/styled";

const FeatureButton = ({ feature, value, icon }) => {
  const selectIcon = (icon) => {
    switch (icon) {
      case "adults":
        return <IconAdults aria-label="edit icon" />;
      case "transmission":
        return <IconTransmission aria-label="edit icon" />;
      case "engine":
        return <IconEngine aria-label="edit icon" />;
      case "kitchen":
        return <IconKitchen aria-label="edit icon" />;
      case "beds":
        return <IconBed aria-label="edit icon" />;
      case "airConditioner":
        return <IconAC aria-label="edit icon" />;
      case "shower":
        return <IconShower aria-label="edit icon" />;
      case "TV":
        return <IconTV aria-label="edit icon" />;
      case "CD":
        return <IconCD aria-label="edit icon" />;
      case "radio":
        return <IconRadio aria-label="edit icon" />;
      case "toilet":
        return <IconToilet aria-label="edit icon" />;
      case "freezer":
        return <IconFreezer aria-label="edit icon" />;
      case "hob":
        return <IconHob aria-label="edit icon" />;
      case "microwave":
        return <IconMicrowave aria-label="edit icon" />;
      case "gas":
        return <IconGas aria-label="edit icon" />;
      case "water":
        return <IconWater aria-label="edit icon" />;
      default:
        return null;
    }
  };

  const formatFeature = (feature, value) => {
    switch (feature) {
      case "adults":
        return `${value} ${feature}`;
      case "transmission":
        return `${value.charAt(0).toUpperCase() + value.slice(1)}`;
      case "engine":
        return `${value.charAt(0).toUpperCase() + value.slice(1)}`;
      case "kitchen":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;
      case "beds":
        return `${value} ${feature}`;
      case "airConditioner":
        return;
      case "TV":
        return "TV";
      case "CD":
        return "CD";
      case "radio":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;
      case "toilet":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;
      case "freezer":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;
      case "hob":
        return `${value} ${feature}`;
      case "microwave":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;
      case "gas":
        return `${value} ${feature}`;
      case "water":
        return `${value} ${feature}`;
      case "shower":
        return `${feature.charAt(0).toUpperCase() + feature.slice(1)}`;

      default:
        return feature;
    }
  };

  return (
    <StyledFeatureButton>
      {selectIcon(icon)}
      {formatFeature(feature, value)}
    </StyledFeatureButton>
  );
};

export default FeatureButton;
