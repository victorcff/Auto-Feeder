// PAGE NOT FULLY DEVELOPED YET


import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import * as database from 'firebase/database'
import { RootStackParamList } from '../RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

type homeConfigScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export function CreateUser(){

  const navigation = useNavigation<homeConfigScreenProp>()
  
  const [ user, setUser ] = useState('')
  const [ nickname, setNickname ] = useState('')

  const db = database.getDatabase()
  const ref = database.ref(db, 'users')

  const handleUser = () => {
    // CÓDIGO AINDA NÃO COMPLETO PARA VERIFICAR SE O USUÁRIO JÁ EXISTE
    // database.get(database.child(ref, 'Users'))
    // .then((snapshot) => {
    //   if(snapshot.exists()) {
    //     const data = snapshot.val()
    //   } else {
    //     console.log('Sem dados para mostrar')
    //   }
    // }).catch((error) => {
    //   console.error(error)
    // })

    database.push(ref, user)

    navigation.navigate('Home')

  }

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.title}>
          Digite o nome de usuário:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Nome de usuário'
          value={user}
          onChangeText={text => setUser(text)}
        />
      </View>
      <View style={styles.nickname}>
        <Text style={styles.title}>
          Digite o apelido do usuário:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Apelido'
          value={nickname}
          onChangeText={text => setNickname(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleUser}
      >
        <Text style={styles.buttonTitle}>
          REGISTRAR USUÁRIO
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}