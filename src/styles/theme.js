import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  colors: {
    bg: "#f0ede8",
    bgAlpha: "#f0ede870",
    text: "#222",
    highlight: "#523F02",
    accent: "#85715d",
    primary: "#444",
    secondary: "#ddd",
    success: "#0A821A",
    error: "#82060D",
  },
};

const darkTheme = {
  colors: {
    bg: "#222",
    bgAlpha: "#2227",
    text: "#f0ede8",
    highlight: "#85715d",
    accent: "#523F02",
    primary: "#ddd",
    secondary: "#444",
    success: "#0A521A",
    error: "#52060D",
  },
};

export const Theme = ({ children }) => {
  const { theme } = useSelector((state) => state);
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
