import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export default function Significado(props){
  return (
     <View >
      <Text testID='Teste'>{props.route.params.name}</Text>

      <Text>{props.route.params.sig}</Text>
    </View>
  )
}

