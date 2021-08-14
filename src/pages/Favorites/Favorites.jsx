import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLocation } from "../../actions/favoritesAction";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Loader from "../../UI_Elements/Loader/Loader";

import "./Style/Favorites.style.css";

const Favorites = () => {
  const { favoritesList, fetchedFavorite, favoriteStatus } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoritesList.length > 0) {
      dispatch(getSavedLocation());
    }
  }, [dispatch, favoritesList.length]);

  if (favoritesList.length === 0) {
    return (
      <div className="favorite-empty-message">Favorites List is empty</div>
    );
  } else {
    return (
      <div className="favorite-container">
        {favoriteStatus === "pending" ? <Loader overlay /> : null}
        <FavoriteList favList={fetchedFavorite} />
      </div>
    );
  }
};

export default Favorites;
