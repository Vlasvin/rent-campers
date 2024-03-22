import React from "react";

import {
  FeatureButton as StyledFeatureButton,
  IconAdults,
  IconTransmission,
  IconEngine,
  IconKitchen,
  IconBed,
  IconAC,
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
        return "AC";
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
