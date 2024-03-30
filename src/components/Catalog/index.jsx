import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCampers } from "../../redux/catalog/operations";
import Card from "components/Card";
import Sidebar from "components/Sidebar";
import Modal from "components/Modal";

import {
  CatalogContainer,
  SidebarContainer,
  CardContainer,
  LoadMoreBtn,
} from "components/Catalog/styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.catalog.campers);
  const [filteredCampers, setFilteredCampers] = useState(campers);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const cardsPerLoad = 4;

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers);
  }, [campers]);

  const handleSearch = (filters) => {
    const filteredData = campers.filter((camper) => {
      const locationMatch =
        filters.location === "" ||
        camper.location.toLowerCase().includes(filters.location.toLowerCase());

      const equipmentKeys = Object.keys(filters.equipment).filter(
        (key) => filters.equipment[key]
      );

      const equipmentMatch = equipmentKeys.every((filterKey) => {
        const getCamperKey = (filterKey) => {
          switch (filterKey) {
            case "AC":
              return "airConditioner";
            case "Automatic":
              return "transmission";
            case "Kitchen":
              return "kitchen";
            case "TV":
              return "TV";
            case "Shower/WC":
              return "shower";
            default:
              return "";
          }
        };
        const camperKey = getCamperKey(filterKey);

        const camperEquipment =
          camper[camperKey] || (camper.details && camper.details[camperKey]);

        if (typeof camperEquipment === "number") {
          return camperEquipment > 0;
        } else if (typeof camperEquipment === "string") {
          return camperEquipment.toLowerCase() === filterKey.toLowerCase();
        }
        return false;
      });

      const normalizeCamperType = (type) => {
        return type.charAt(0).toLowerCase() + type.slice(1).replace(/\s+/g, "");
      };

      const campersTypeMatch =
        normalizeCamperType(filters.campersType) === "" ||
        camper.form === normalizeCamperType(filters.campersType);
      return locationMatch && equipmentMatch && campersTypeMatch;
    });

    setFilteredCampers(filteredData);
  };

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerLoad);
  };

  const openModal = (camper) => {
    setSelectedCamper(camper);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCamper(null);
    document.body.style.overflow = "";
  };

  return (
    <CatalogContainer>
      <SidebarContainer>
        <Sidebar handleSearch={handleSearch} />
      </SidebarContainer>
      <CardContainer>
        {filteredCampers.slice(0, visibleCards).map((camper) => (
          <Card key={camper._id} data={camper} openModal={openModal} />
        ))}
        {visibleCards < filteredCampers.length && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </CardContainer>
      {selectedCamper && (
        <Modal closeModal={closeModal} data={selectedCamper} />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
