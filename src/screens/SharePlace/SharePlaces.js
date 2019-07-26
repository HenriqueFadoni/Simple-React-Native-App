import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import PlaceInput from '../../components/InputForm/InputForm';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "blue"
    }

    state = {
        placeName: {
            value: "",
            valid: false,
            touched: false,
            validationRules: {
                notEmpty: true
            }
        }
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                });
            }
        }
    }

    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(
                            val,
                            prevState.controls.placeName.validationRules
                        ),
                        touched: true
                    }
                }
            }
        });
    }

    placeAddedHandler = () => {
        if (this.state.controls.placeName.value.trim() !== '') {
            this.props.onAddPlace(this.state.controls.placeName.value);
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>
                            Share a Place with us!
                        </HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput
                        placeData={this.state.controls.placeName}
                        onChangeText={this.placeNameChangedHandler}
                    />
                    <View style={styles.button}>
                        <Button 
                            title="Share The Place" 
                            onPress={this.placeAddedHandler}
                            disabled={!this.state.controls.placeName.valid}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);