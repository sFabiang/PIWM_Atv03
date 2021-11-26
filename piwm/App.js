import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './views/Cabecalho.jsx';
import Disciplina from './views/Disciplina.jsx';
import Corpo from './views/Corpo.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo/>
      <Cabecalho nome='Samuel Fabián' curso='Design Digital'/>
      <br/>
      <Text style={{fontWeight: "bold"}}>Disciplinas matriculadas:</Text>
      <ul>
        <li><Disciplina disciplina='PIWM'/></li>
        <li><Disciplina disciplina='Sociedade, Cultura e Tecnologia'/></li>
        <li><Disciplina disciplina='Design e Inovação'/></li>
        <li><Disciplina disciplina='User Experience (UX)'/></li>
        <li><Disciplina disciplina='Estágio I'/></li>
      </ul>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
