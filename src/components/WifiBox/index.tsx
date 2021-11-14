// COMPONENT NOT FULLY DEVELOPED YET


import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { WifiButton } from '../WifiButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../screens/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../../Themes/Colors';

type wifiConfigScreenProp = StackNavigationProp<RootStackParamList, 'WifiConfig'>;


export function WifiBox() {
  const navigation = useNavigation<wifiConfigScreenProp>();

  return (
    <View style={styles.container}>
      <WifiButton
        title='ADICIONAR DISPOSITIVO'
        color={COLORS.BLACK}
        backgroundColor={COLORS.RED}
        icon='wifi'
        onPress={ () => navigation.navigate('WifiConfig') }
      />
    </View>
  );
}