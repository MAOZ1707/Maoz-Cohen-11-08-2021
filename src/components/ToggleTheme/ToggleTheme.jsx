import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { SwitchBtnStyle } from "../../UI_Elements/SwitchBtn/SwitchBtnStyle";
import Brightness5OutlinedIcon from "@material-ui/icons/Brightness5Outlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import "./Style/ToggleTheme.style.css";

const ToggleTheme = () => {
  const { setThemeMode } = useTheme();
  const [state, setState] = React.useState({
    toggle: true,
  });

  useEffect(() => {
    if (state.toggle === false) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, [setThemeMode, state.toggle]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="header-theme-switch">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <Brightness2OutlinedIcon fontSize="small" />
          </Grid>
          <Grid item>
            <SwitchBtnStyle
              checked={state.toggle}
              onChange={handleChange}
              name="toggle"
            />
          </Grid>
          <Grid item>
            <Brightness5OutlinedIcon fontSize="small" />
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

export default ToggleTheme;
