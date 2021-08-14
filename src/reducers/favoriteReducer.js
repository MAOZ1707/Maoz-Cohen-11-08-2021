const initialState = {
  favoritesList: [],
  fetchedFavorite: [],
  favoriteError: null,
  favoriteStatus: "",
  favoriteLoading: false,
};

export const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favoriteError: null,
        fetchedFavorite: payload,
        favoriteLoading: false,
        favoriteStatus: "success",
      };
    case "SAVE_TO_FAVORITES":
      return {
        ...state,
        favoritesList: [...state.favoritesList, payload],
        favoriteError: null,
        favoriteLoading: false,
        favoriteStatus: "success",
      };
    case "FAVORITE_ERROR":
      return {
        ...state,
        favoriteError: payload,
        favoriteLoading: false,
        favoriteStatus: "fail",
      };
    case "FAVORITE_LOADING":
      return {
        ...state,
        favoriteError: false,
        favoriteLoading: true,
        favoriteStatus: "pending",
      };
    case "DELETE_FAVORITE_LOCATION":
      return {
        ...state,
        favoritesList: state.favoritesList.filter(
          (favCity) => favCity.Key !== payload
        ),
        favoriteError: false,
        favoriteLoading: false,
        favoriteStatus: "success",
      };
    case "CLEAR_FAVORITE_ERROR":
      return {
        ...state,
        favoriteError: null,
        favoriteStatus: "clear",
      };
    default:
      return state;
  }
};
