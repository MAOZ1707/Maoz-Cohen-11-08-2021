import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoriteReducer } from "../reducers/favoriteReducer";
import { weatherReducer } from "../reducers/weatherReducer";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  weather: weatherReducer,
  favorite: favoriteReducer,
});

export default persistReducer(persistConfig, rootReducer);
