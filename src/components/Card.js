import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './';

const Card = ({ children }) => {
  const { containerStyle }= styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  )
};

export default Card