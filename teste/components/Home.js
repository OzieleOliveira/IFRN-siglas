import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export default function Home(props){
  return (
    <View style={Styles.container}>

        <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>DG</b>, sig:'Direção Geral'})}
      >
          <Text testID='btnindex'><b>DG</b></Text>
      </TouchableHighlight>

    
      <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>GABIN</b>, sig:'Chefia de Gabinete'})}
      >
          <Text><b>GABIN</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>CTI</b>, sig:'Coordenação de Tecnologia da Informação'})}
      >
          <Text><b>CTI</b></Text>
      </TouchableHighlight>


      <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COGPE</b>, sig:'Coordenação de Gestão de Pessoas'})}
      >
          <Text><b>COGPE</b></Text>         
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COAPAC</b>,sig:'Coordenação de Apoio Acadêmico'})}
      >
          <Text><b>COAPAC</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COAES</b>, sig:'Coordenação de Atividades Estudantis'})}
      >
          <Text><b>COAES</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COEX</b>, sig:'Coordenação de Extensão'})}
      >
          <Text><b>COEX</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COPEIN</b>, sig:'Coordenação de Pesquisa e Inovação'})}
      >
          <Text><b>COPEIN</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>DIAC</b>, sig:'Diretoria Acadêmica'})}
      >
          <Text><b>DIAC</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
               onPress={() => props.navigation.navigate('Significado',{name:<b>SEAC</b>, sig:'Secretaria Acadêmica'})}
      >
          <Text><b>SEAC</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COLAB</b>, sig:'Coordenação de Laboratórios'})}
      >
          <Text><b>COLAB</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>DIAD</b>, sig:'Diretoria de Administração'})}
      >
          <Text><b>DIAD</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COSGEM</b>, sig:'Coordenação de Serviços Gerais e Manutenção'})}
      >
          <Text><b>COSGEM</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COMPAT</b>, sig:'Coordenação de Material e Patrimônio'})}
      >
          <Text><b>COMPAT</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>COFINC</b>, sig:'Coordenação de Finanças e Contratos'})}
      >
          <Text><b>COFINC</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>NAPNE</b>, sig:'Núcleo de Atendimento às Pessoas com Necessidades Educacionais Especiais'})}
      >
          <Text><b>NAPNE</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
              onPress={() => props.navigation.navigate('Significado',{name:<b>NEABI</b>, sig:'Núcleo de Estudos Afro-brasileiros e Indígenas do Campus Canguaretama'})}
      >
          <Text><b>NEABI</b></Text>
      </TouchableHighlight>

          <TouchableHighlight
        style={Styles.bloco}
                onPress={() => props.navigation.navigate('Significado',{name:<b>NUARTE</b>, sig:'Núcleo de Arte'})}
      >
          <Text><b>NUARTE</b></Text>
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