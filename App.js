import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home';
import Significado from './components/Significado';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialName='Home' >
        <Stack.Screen name='Siglas IFRN' component={Home} />
        <Stack.Screen name='Significado' component={Significado} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
  
 

