import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const theme = {
    light: {
      color: "#121212",
      background: "linear-gradient(to right, #1ccaff, #009ffe, #126deb)",
    },
    dark: {
      color: "#bb86fc",
      background: "linear-gradient(to right, #0a0c29,#0b1634 ,#0d1d40)",
    },
  };
  const value = {
    theme,
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
