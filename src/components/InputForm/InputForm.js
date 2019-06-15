import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputForm = props => (
    <View style={styles.inputContainer}>
        <TextInput
            value={props.value}
            onChangeText={props.changeTextHandler}
            style={styles.placeInput} />
        <Button
            title="Add"
            style={styles.placeButton}
            onPress={props.submit} />
    </View>
);

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        borderColor: "black",
        borderWidth: 1,
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});