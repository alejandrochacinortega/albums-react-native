import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = ({title}) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
};

export default Header;