import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SetTimesButton } from '../SetTimesButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../screens/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../../Themes/Colors';
import { SetWeightButton } from '../SetWeightButton';

type setTimesConfigScreenProp = StackNavigationProp<RootStackParamList, 'SetTimes'>;


export function ConfigsBox() {
  const navigation = useNavigation<setTimesConfigScreenProp>();

  return (
    <View style={styles.container}>
      <SetTimesButton
        title='HORÁRIOS'
        color={COLORS.BLACK}
        backgroundColor={COLORS.GREEN}
        icon='clockcircle'
        onPress={ () => navigation.navigate('SetTimes') }
      />
      <SetWeightButton
        title='PESAGEM'
        color={COLORS.BLACK}
        backgroundColor={COLORS.RED}
        icon='weight'
        onPress={ () => navigation.navigate('SetWeight') }
      />
    </View>
  );
}