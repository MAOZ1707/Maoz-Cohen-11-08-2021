import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import {
  getCityByName,
  getCityByNameByCoordinates,
} from "./actions/searchAction";
import useGeoLocation from "./hooks/useGeoLocation";
import { useTheme } from "./context/ThemeProvider";

function App() {
  const dispatch = useDispatch();
  const { dailyWeather } = useSelector((state) => state.weather);
  const location = useGeoLocation();
  const { theme, themeMode } = useTheme();

  useEffect(() => {
    if (location.loaded && !location.error) {
      dispatch(getCityByNameByCoordinates(location.coordinates));
    } else {
      dispatch(getCityByName("tel aviv"));
    }
  }, [dispatch, location.coordinates, location.error, location.loaded]);

  const routes = (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <div className="app" style={theme[themeMode]}>
        <Header />
        {dailyWeather.fetchedCityKey && routes}
      </div>
    </Router>
  );
}

export default App;
