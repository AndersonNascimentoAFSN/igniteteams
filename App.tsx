import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Teams } from "@screens/Teams";
import { Loading } from "@components/Loading";

import theme from "@theme/index";

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Teams /> : <Loading />}
    </ThemeProvider>
  );
}
