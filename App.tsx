import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeModules } from 'react-native';

export default function App() {

  const [helloName, setHelloName] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [firstName, setFirstName] = useState("");

  const clicked = async () => {
    const { CalendarModule } = NativeModules;
    try {
      const data = await CalendarModule.createCalendarEvent(firstName, 'testLocation');
      setHelloName(data);
      
    } catch (error) {
      setErrorInfo(error);
    }    
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setFirstName} style={styles.textInput}></TextInput>
      <Text>{helloName}</Text>
      <Button title="Click Me" onPress={clicked}>ClickMe</Button>
      <Text>{errorInfo}</Text>
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
