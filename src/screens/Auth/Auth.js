import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import BackgroundImage from '../../assets/beautiful-place.jpg'

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <ImageBackground
                imageStyle={{opacity: 0.65}}
                source={BackgroundImage}
                style={style.backgroundImg}
            >
                <View style={style.container}>
                    <MainText>
                        <HeadingText>Please, Log In</HeadingText>
                    </MainText>
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
                        <DefaultInput
                            placeholder="Password"
                            style={style.input}
                        />
                        <DefaultInput
                            placeholder="Confirm Password"
                            style={style.input}
                        />
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
    }
});

export default AuthScreen;