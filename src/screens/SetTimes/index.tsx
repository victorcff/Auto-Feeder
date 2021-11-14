import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { SaveTimesButton } from '../../components/SaveTimesButton';
import { COLORS } from '../../Themes/Colors';
import * as database from 'firebase/database'
import { styles } from './styles';
import { RootStackParamList } from '../RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export function SetTimes(){
  const [hour1, setHour1] = useState('')
  const [hour2, setHour2] = useState('')
  const [hour3, setHour3] = useState('')
  const [min1, setMin1] = useState('')
  const [min2, setMin2] = useState('')
  const [min3, setMin3] = useState('')

  const navigation = useNavigation<homeScreenProp>()

  const db = database.getDatabase()
  const ref1 = database.ref(db, '/time/time1')
  const ref2 = database.ref(db, '/time/time2')
  const ref3 = database.ref(db, '/time/time3')

  const handleSaveTime = () => {
    database.update(ref1, { hour1, min1 })
    database.update(ref2, { hour2, min2 })
    database.update(ref3, { hour3, min3 })
    Alert.alert('Sucesso', 'Dados salvos')
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.timeBox}>
        <Text style={styles.title}>Horário 1</Text>
        <View style={styles.time}>
          <TextInput 
            placeholder='00'
            value={hour1}
            onChangeText={hour1 => setHour1(hour1)}
            style={styles.input}
            keyboardType='numeric'
          />
          <Text style={styles.separator}>:</Text>
          <TextInput 
            placeholder='00'
            value={min1}
            onChangeText={min1 => setMin1(min1)}
            style={styles.input}
            keyboardType='numeric'
          />
        </View>
      </View>
      
      <View style={styles.timeBox}>
        <Text style={styles.title}>Horário 2</Text>
        <View style={styles.time}>
          <TextInput 
            placeholder='00'
            value={hour2}
            onChangeText={hour2 => setHour2(hour2)}
            style={styles.input}
            keyboardType='numeric'
          />
          <Text style={styles.separator}>:</Text>
          <TextInput 
            placeholder='00'
            value={min2}
            onChangeText={min2 => setMin2(min2)}
            style={styles.input}
            keyboardType='numeric'
          />
        </View>
      </View>
      
      <View style={styles.timeBox}>
        <Text style={styles.title}>Horário 3</Text>
        <View style={styles.time}>
          <TextInput 
            placeholder='00'
            value={hour3}
            onChangeText={hour3 => setHour3(hour3)}
            style={styles.input}
            keyboardType='numeric'
          />
          <Text style={styles.separator}>:</Text>
          <TextInput 
            placeholder='00'
            value={min3}
            onChangeText={min3 => setMin3(min3)}
            style={styles.input}
            keyboardType='numeric'
          />
        </View>
      </View>

      <SaveTimesButton
        title='SALVAR'
        color={COLORS.BLACK}
        backgroundColor={COLORS.RED}
        icon='save'
        onPress={handleSaveTime}
      />
      
    </KeyboardAvoidingView>
  );
}