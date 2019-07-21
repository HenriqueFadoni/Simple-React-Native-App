import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={
            [
                style.input,
                props.style,
                !props.valid && props.touched 
                    ? style.invalid 
                    : null
            ]
        }
    />
);

const style = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default defaultInput;