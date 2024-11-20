
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Splace from './src/screens/splaceScreen';
import RootNavigation from './src/navigation/rootNavigation';
import Home from './src/screens/homeScreen/lowLevel';
import Detail from './src/screens/detailScreen';
import Level from './src/screens/levelScreen';

function App() {
  return (
    <RootNavigation/>
  );
}

export default App;

const style = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
})