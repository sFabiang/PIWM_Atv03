import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './views/Cabecalho.jsx';
import Disciplina from './views/Disciplina.jsx';
import Corpo from './views/Corpo.jsx';
import IMCApp from './views/IMCApp.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <IMCApp></IMCApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5a5a5',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
