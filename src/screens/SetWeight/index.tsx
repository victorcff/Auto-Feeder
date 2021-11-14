import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { COLORS } from '../../Themes/Colors';
import * as database from 'firebase/database'
import { styles } from './styles';
import { RootStackParamList } from '../RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { SaveWeightButton } from '../../components/SaveWeightButton';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export function SetWeight(){
  const [weight, setWeight] = useState('')

  const navigation = useNavigation<homeScreenProp>()

  const db = database.getDatabase()
  const ref = database.ref(db, 'weight')

  const handleSaveWeight =() => {
    database.update(ref, {weight})
    Alert.alert('Sucesso', 'Dados salvos')
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          Digite o peso da refeição
        </Text>
        <Text style={styles.subtitle}>
          (em gramas)
        </Text>
        <TextInput
        style={styles.input}
        placeholder='Peso (g)'
        keyboardType='numeric'
        value={weight}
        onChangeText={setWeight}
      />
      </View>

      <View style={styles.buttonBox}>
        <SaveWeightButton
          title='SALVAR'
          color={COLORS.BLACK}
          backgroundColor={COLORS.RED}
          icon='save'
          onPress={handleSaveWeight}
        />
      </View>
      
            
    </KeyboardAvoidingView>
  );
}