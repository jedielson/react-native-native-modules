import React, { useState } from "react";
import { Button, NativeModules, StyleSheet, Text, TextInput, View } from "react-native";

export const Hello = () => {
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
        <View>
            <TextInput onChangeText={setFirstName} style={styles.textInput}></TextInput>
            <Text>{helloName}</Text>
            <Button title="Click Me" onPress={clicked}>ClickMe</Button>
            <Text>{errorInfo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 300,
        margin: 100,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#eee'
    }
});