import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
    deletePlace
} from '../../store/actions/index';

class InputForm extends Component {
    state ={
        placeName: ''
    }

    placeNameChangedHandler = val => this.setState({ placeName: val });

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onAddPlace(this.state.placeName);
        this.setState({ placeName: '' });
    }

    placeDeletedHandler = () => this.props.onDeletePlace();

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput} />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler} />
            </View>
        )
    }
}

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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: () => dispatch(deletePlace())
    }
}

export default connect(null, mapDispatchToProps)(InputForm);