import React from "react";

import campersData from "./campersData.json";
import Card from "components/Card";
import Sidebar from "components/Sidebar";

import {
  CatalogContainer,
  SidebarContainer,
  CardContainer,
} from "components/Catalog/styled";

const Catalog = () => {
  return (
    <CatalogContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <CardContainer>
        {campersData.map((camper) => (
          <Card key={camper._id} data={camper} />
        ))}
      </CardContainer>
    </CatalogContainer>
  );
};

export default Catalog;
