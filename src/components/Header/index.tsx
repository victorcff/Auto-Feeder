import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../../Themes/Colors';
import { LogoutButton } from '../LogoutButton';
import { styles } from './styles';
import { auth } from '../../firebase';
import { signOut } from '@firebase/auth';
import { RootStackParamList } from '../../screens/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/core';

type loginConfigScreenProp = StackNavigationProp<RootStackParamList, 'Login'>

export function Header(){
  const navigation = useNavigation<loginConfigScreenProp>()
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      navigation.replace('Login')
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <LogoutButton 
        icon='logout'
        color={COLORS.BLACK}
        title='Sair'
        onPress={handleLogout}
      />
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Alimentador Automático
      </Text>
      <Text style={styles.name}>
        Victor Cavalcanti Fernandes Ferreira
      </Text>
    </View>
  );
}