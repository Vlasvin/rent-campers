import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { catalogReducer } from "./catalog/catalogSlice";
import favoritesReducer from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
  },
});

export const persistor = persistStore(store);
