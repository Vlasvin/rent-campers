import React from "react";

import BookForm from "components/Modal/BookForm";

import {
  DetailsItem,
  DetailsList,
  DetailsTitle,
  FeatureButton,
  FeatureButtons,
  FeaturesContainer,
  VehicleDetails,
} from "./styled";

const Features = ({ data }) => {
  const featuresData = data || data.details || {};

  return (
    <FeaturesContainer>
      <VehicleDetails>
        <FeatureButtons>
          {Object.entries(featuresData).map((feature, index) => (
            <FeatureButton
              key={index}
              feature={feature.name}
              value={feature.value}
              icon={feature.icon}
            />
          ))}
        </FeatureButtons>
        <DetailsTitle>Vehicle Details</DetailsTitle>
        <DetailsList>
          <DetailsItem>Form</DetailsItem>
          <DetailsItem>Length</DetailsItem>
          <DetailsItem>Width</DetailsItem>
          <DetailsItem>Height</DetailsItem>
          <DetailsItem>Tank</DetailsItem>
          <DetailsItem>Consumption</DetailsItem>
        </DetailsList>
      </VehicleDetails>
      <BookForm />
    </FeaturesContainer>
  );
};

export default Features;
