import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";

import HOME from "./src/pages/Home";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <HOME />
    </ThemeProvider>
  );
}
