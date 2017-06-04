import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './';

const CardSection = ({children}) => {
  return (
    <View style={styles.containerCardSection}>
      {children}
    </View>
  )
};

export default CardSection;