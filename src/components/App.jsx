import CatalogPage from "pages/CatalogPage";
import Favorites from "pages/FavoritePage";
import HomePage from "pages/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};
