import React from "react";

import BookForm from "components/Modal/BookForm";
import FeatureButton from "components/Card/FeatureButton";

import {
  Detail,
  DetailsItem,
  DetailsList,
  DetailsTitle,
  DetailsContainer,
  FeaturesContainer,
  VehicleDetails,
} from "./styled";

const Features = ({ data }) => {
  const { details, form, length, width, height, tank, consumption } = data;
  const renderFeatureButtons = () => {
    const limitedFeatures = [
      { key: "airConditioner", label: "Air Conditioner" },
      { key: "kitchen", label: "Kitchen" },
      { key: "beds", label: "Beds" },
      { key: "CD", label: "CD" },
      { key: "radio", label: "Radio" },
      { key: "toilet", label: "Toilet" },
      { key: "freezer", label: "Freezer" },
      { key: "hob", label: "Hob" },
      { key: "microwave", label: "Microwave" },
      { key: "gas", label: "Gas" },
      { key: "water", label: "Water" },
    ];

    const featureButtons = [];
    for (const feature of limitedFeatures) {
      const featureValue = data[feature.key] || details[feature.key];
      if (featureValue !== undefined) {
        featureButtons.push(
          <FeatureButton
            key={feature.key}
            feature={feature.key}
            value={featureValue}
            icon={feature.key}
          />
        );
      }
    }
    return featureButtons;
  };

  return (
    <DetailsContainer>
      <VehicleDetails>
        <FeaturesContainer>{renderFeatureButtons()}</FeaturesContainer>

        <DetailsTitle>Vehicle Details</DetailsTitle>
        <DetailsList>
          <DetailsItem>
            <Detail>Form</Detail>
            <Detail>{form.charAt(0).toUpperCase() + form.slice(1)}</Detail>
          </DetailsItem>
          <DetailsItem>
            <Detail>Length</Detail>
            <Detail>{length}</Detail>
          </DetailsItem>
          <DetailsItem>
            <Detail>Width</Detail>
            <Detail>{width}</Detail>
          </DetailsItem>
          <DetailsItem>
            <Detail>Height</Detail>
            <Detail>{height}</Detail>
          </DetailsItem>
          <DetailsItem>
            <Detail>Tank</Detail>
            <Detail>{tank}</Detail>
          </DetailsItem>
          <DetailsItem>
            <Detail>Consumption</Detail>
            <Detail>{consumption}</Detail>
          </DetailsItem>
        </DetailsList>
      </VehicleDetails>
      <BookForm />
    </DetailsContainer>
  );
};

export default Features;
