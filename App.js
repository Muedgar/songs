import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Albumlist } from './src/components/Index';

const App = () => (
  <View style={styles.container}>
  <Header showText="Songs" />
  <Albumlist />
  </View>
);

const styles = {
   container: {
     flex: 1
   }
};

export default App;
