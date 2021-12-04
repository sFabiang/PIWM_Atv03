import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './components/stack/Routes'

const App = () => {
  return (

    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>

  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 24,
    fontFamily: 'Arial'
  }
});

export default App;
