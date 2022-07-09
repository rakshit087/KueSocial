import { useState } from "react";
import { CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { Navbar } from "../layouts/Navbar";
import { darkTheme, lightTheme } from "../utilities/theme";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <CssBaseline>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <SnackbarProvider maxSnack={1}>
          <Paper sx={{ minHeight: "100vh" }}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Component {...pageProps} isDarkMode={isDarkMode} />
          </Paper>
        </SnackbarProvider>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default MyApp;
