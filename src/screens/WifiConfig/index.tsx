// PAGE NOT FULLY DVELOPED YET

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { WifiButton } from '../../components/WifiButton';
import * as database from 'firebase/database'


export function WifiConfig(){
  const [ ssid, setSSID ] = useState('');
  const [ password, setPassword ] = useState('');

  const db = database.getDatabase()
  const ref = database.ref(db, 'wifiConfig')

  const handleConnect = () => {
    database.update(ref, { ssid, password })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Por favor, informe o SSID (nome da rede WiFi) e a senha
      </Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          keyboardAppearance='dark'
          placeholder='SSID'
          placeholderTextColor='#8D8D99'
          maxLength={50}
          onChangeText={setSSID}
          value={ssid}
        />
        <TextInput
          style={styles.input}
          keyboardAppearance='dark'
          placeholder='Senha'
          placeholderTextColor='#8D8D99'
          maxLength={50}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.button}>
        <WifiButton
          title='CONECTAR'
          icon='wifi'
          onPress={handleConnect}
        />
      </View> 
    </View>
  );
}