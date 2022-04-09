import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Hello } from './components/hello';

export default function App() {

  return (
    <View style={styles.container}>
      <Hello/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 100,
    borderWidth: 1,
    padding: 10,    
    backgroundColor: '#eee'
  }
});
