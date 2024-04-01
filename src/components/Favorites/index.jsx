import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/favorites/selectors";
import { selectCampers } from "../../redux/catalog/selectors";
import Card from "components/Card";
import Modal from "components/Modal";

import {
  FavoriteContainer,
  CardContainer,
  LoadMoreBtn,
  Title,
  NoFavoritesMessage,
  LinkStyle,
} from "./styled";

const Favorites = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const cardsPerLoad = 4;

  const favoriteCampers = campers.filter((camp) =>
    favorites.includes(camp._id)
  );

  const handleRemoveFromFavorites = (cardId) => {
    dispatch(removeFromFavorites(cardId));
  };

  const handleAddToFavorites = (cardId) => {
    dispatch(addToFavorites(cardId));
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

  // Removed useEffect that fetched data from local storage

  return (
    <FavoriteContainer>
      {favoriteCampers.length > 0 && <Title>Your favorite campers</Title>}
      {favoriteCampers.length === 0 && (
        <NoFavoritesMessage>
          You haven't added any campers yet.
          <LinkStyle to="/catalog">Add campers to favorites</LinkStyle>
        </NoFavoritesMessage>
      )}
      <CardContainer>
        {favoriteCampers.slice(0, visibleCards).map((card) => (
          <Card
            key={card._id}
            data={card}
            openModal={openModal}
            onFavoriteToggle={
              favorites.includes(card._id)
                ? handleRemoveFromFavorites
                : handleAddToFavorites
            }
          />
        ))}

        {visibleCards < favoriteCampers.length && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </CardContainer>
      {selectedCamper && (
        <Modal closeModal={closeModal} data={selectedCamper} />
      )}
    </FavoriteContainer>
  );
};

export default Favorites;
