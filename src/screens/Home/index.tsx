import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { MainImage } from '../../components/MainImage';
import { ConfigsBox } from '../../components/ConfigsBox';



export function Home () {

  return (
    <View style={styles.container}>
      <Header />
      <MainImage />
      <ConfigsBox />
    </View>
  );
}