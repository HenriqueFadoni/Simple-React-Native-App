import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import BackgroundImage from '../../assets/beautiful-place.jpg'

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape" // Dimensions.get("window") = dims.window
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        let headingText = null;

        if (this.state.viewMode === 'portrait') {
            headingText = (
                <MainText>
                    <HeadingText>Please, Log In</HeadingText>
                </MainText>
            );
        }
        return (
            <ImageBackground
                imageStyle={{ opacity: 0.65 }}
                source={BackgroundImage}
                style={style.backgroundImg}
            >
                <View style={style.container}>
                    {headingText}
                    <ButtonWithBackground
                        color="black"
                        onPress={() => alert("Hello")}
                    >
                        Switch To Login
                    </ButtonWithBackground>
                    <View style={style.inputContainer}>
                        <DefaultInput
                            placeholder="Your E-mail Address"
                            style={style.input}
                        />
                        <View style={
                            this.state.viewMode === 'portrait'
                            ? style.portraitPasswordContainer
                            : style.landscapePasswordContainer
                        }>
                            <View style={
                                this.state.viewMode === 'portrait' 
                                ? style.portraitPasswordWrapper
                                : style.landscapePasswordWrapper
                            }>
                                <DefaultInput
                                    placeholder="Password"
                                    style={style.input}
                                />
                            </View>
                            <View style={
                                this.state.viewMode === 'portrait' 
                                ? style.portraitPasswordWrapper
                                : style.landscapePasswordWrapper
                            }>
                                <DefaultInput
                                    placeholder="Confirm Password"
                                    style={style.input}
                                />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground
                        color="black"
                        onPress={this.loginHandler}
                    >
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImg: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%",
        margin: 10
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen;