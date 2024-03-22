import React from "react";
import campersData from "./campersData.json";
import Card from "components/Card";

const Catalog = () => {
  console.log(campersData);
  return (
    <div>
      {campersData.map((camper) => (
        <Card key={camper._id} data={camper} />
      ))}
    </div>
  );
};

export default Catalog;
