import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Groups } from './src/screens/Groups';

export function App() {
  return (
    <View>
      <StatusBar />
      <Groups />
    </View>
  );
}

