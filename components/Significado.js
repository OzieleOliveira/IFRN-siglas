import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export default function Significado(props){
  
  const name = props.route.params==undefined ? '' : props.route.params.name
  const sig = props.route.params==undefined ? '' : props.route.params.sig
  return (
     <View >
      <Text testID='Teste'>{name}</Text>

      <Text>{sig}</Text>
    </View>
  )
}

