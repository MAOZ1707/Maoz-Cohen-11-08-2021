import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../actions/favoritesAction";
import { shapeFavorite } from "../../helper/helper";
import ErrorMessage from "../../UI_Elements/ErrorMessage/ErrorMessage";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Style/FavoritesButton.style.css";
import { useTheme } from "../../context/ThemeProvider";

const FavoritesButton = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { theme, themeMode } = useTheme();
  const { dailyWeather } = useSelector((state) => state.weather);
  const { favoriteError, favoritesList } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const check = favoritesList.find((city) => {
      return city.Key === dailyWeather.fetchedCityKey;
    });
    if (check) {
      setIsFavorite(true);
    }
  }, [dailyWeather.fetchedCityKey, favoritesList]);

  const handleClick = () => {
    dispatch(addToFavorites(shapeFavorite(dailyWeather)));
  };

  return (
    <>
      <button
        style={{ color: theme[themeMode].color }}
        className="save-to-favorites-btn"
        onClick={handleClick}>
        <span>
          {isFavorite ? (
            <FavoriteIcon fontSize="small" color="secondary" />
          ) : (
            <FavoriteBorderIcon fontSize="small" color="secondary" />
          )}
        </span>
        {children}
      </button>
      {favoriteError && (
        <ErrorMessage msg={favoriteError} type="CLEAR_FAVORITE_ERROR" />
      )}
    </>
  );
};

export default FavoritesButton;
