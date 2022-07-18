import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function Home(props){
  return (
    <View style={Styles.container}>

        <TouchableHighlight testID ='bt'
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>DG</b>, sig:'Direção Geral'})}
                
      >
          <Text testID='btn'>DG</Text>
      </TouchableHighlight>

    
      <TouchableHighlight
        style={Styles.bloco} testID ='bt2'
                onPress={() => props.navigation.navigate('Significado',{name:<b>GABIN</b>, sig:'Chefia de Gabinete'})}
      >
          <Text testID='btn1'>GABIN</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>CTI</b>, sig:'Coordenação de Tecnologia da Informação'})}
      >
          <Text testID='btn2'>CTI</Text>
      </TouchableHighlight>


      <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COGPE</b>, sig:'Coordenação de Gestão de Pessoas'})}
      >
          <Text testID='btn3'>COGPE</Text>         
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COAPAC</b>,sig:'Coordenação de Apoio Acadêmico'})}
      >
          <Text testID='btn4'>COAPAC</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COAES</b>, sig:'Coordenação de Atividades Estudantis'})}
      >
          <Text testID='btn5'>COAES</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COEX</b>, sig:'Coordenação de Extensão'})}
      >
          <Text testID='btn6'>COEX</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COPEIN</b>, sig:'Coordenação de Pesquisa e Inovação'})}
      >
          <Text testID='btn7'>COPEIN</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>DIAC</b>, sig:'Diretoria Acadêmica'})}
      >
          <Text testID='btn8'>DIAC</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
               onPress={() => props.navigation.navigate('Significado',{name:<b>SEAC</b>, sig:'Secretaria Acadêmica'})}
      >
          <Text testID='btn9'>SEAC</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COLAB</b>, sig:'Coordenação de Laboratórios'})}
      >
          <Text testID='btn10'>COLAB</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>DIAD</b>, sig:'Diretoria de Administração'})}
      >
          <Text testID='btn11'>DIAD</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COSGEM</b>, sig:'Coordenação de Serviços Gerais e Manutenção'})}
      >
          <Text testID='btn12'>COSGEM</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COMPAT</b>, sig:'Coordenação de Material e Patrimônio'})}
      >
          <Text testID='btn13'>COMPAT</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COFINC</b>, sig:'Coordenação de Finanças e Contratos'})}
      >
          <Text testID='btn14'>COFINC</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>NAPNE</b>, sig:'Núcleo de Atendimento às Pessoas com Necessidades Educacionais Especiais'})}
      >
          <Text testID='btn15'>NAPNE</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>NEABI</b>, sig:'Núcleo de Estudos Afro-brasileiros e Indígenas do Campus Canguaretama'})}
      >
          <Text testID='btn16'>NEABI</Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>NUARTE</b>, sig:'Núcleo de Arte'})}
      >
          <Text testID='btn17'>NUARTE</Text>
      </TouchableHighlight>

    </View>
  )
}


const Styles = StyleSheet.create({
  container:{
    flex: 1,
   
  },
  bloco:{
    width: 200,
    height: 40,
    backgroundColor: '#00ff40',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginVertical: 10,
    borderRadius: 20,
  },

})