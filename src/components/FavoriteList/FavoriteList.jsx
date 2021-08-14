import React from "react";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import "./Style/FavoriteList.style.css";

const FavoriteList = ({ favList }) => {
  return (
    <div className="favorite-list-wrapper">
      {favList.map((city) => (
        <FavoriteItem key={city.Key} city={city} />
      ))}
    </div>
  );
};

export default FavoriteList;
