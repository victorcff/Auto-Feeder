import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import { SetTimes } from './src/screens/SetTimes';
import { WifiConfig } from './src/screens/WifiConfig';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import {
  SourceCodePro_700Bold
} from '@expo-google-fonts/source-code-pro'
import { Login } from './src/screens/Login';
import { COLORS } from './src/Themes/Colors';
import { CreateUser } from './src/screens/CreateUser';
import { LogBox } from 'react-native';
import { SetWeight } from './src/screens/SetWeight';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

const Stack = createNativeStackNavigator();


export default function App() {
  
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    SourceCodePro_700Bold
  });

  if( !fontsLoaded ) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar 
          style='dark'
          translucent
          backgroundColor='transparent'
      />
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
        <Stack.Screen name='CreateUser' options={{ headerShown: false }} component={CreateUser} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
        <Stack.Screen name='SetTimes' options={{ headerShown: false }} component={SetTimes} />
        <Stack.Screen name='SetWeight' options={{ headerShown: false }} component={SetWeight} />
        <Stack.Screen name="WifiConfig"options={{ title: 'Add Dispositivo', headerStyle: { backgroundColor: COLORS.BLUE } }}  component={WifiConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}