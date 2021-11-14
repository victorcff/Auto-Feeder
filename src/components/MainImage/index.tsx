import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function MainImage(){
  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.img,
          { transform: [{ rotateZ: '45deg' }] }
        ]}
        source={require('../../assets/paw.png')}
      />
    </View>
  );
}