import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Groups } from "@screens/Groups";

export function App() {
  return (
    <View>
      <StatusBar />
      <Groups />
    </View>
  );
}
