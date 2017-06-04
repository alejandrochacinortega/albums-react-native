import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, AlbumList } from './src/components/';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Albums" />
        <AlbumList/>
      </View>
    )
  }
}

Expo.registerRootComponent(App);
