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
        respStyles: {
            pwContainerDirection: "column",
            pwContainerJustifyContent: "flex-start",
            pwWrapperWidth: "100%"
        }
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", dims => {
            this.setState({
                pwContainerDirection: Dimensions.get('window').height > 500 ? "column" : "row",
                pwContainerJustifyContent: Dimensions.get('window').height > 500 ? "flex-start" : "space-between",
                pwWrapperWidth: Dimensions.get('window').height > 500 ? "100%" : "45%"
            });
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        let headingText = null;

        if (Dimensions.get('window').height > 500) {
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
                        <View style={{
                            flexDirection: this.state.respStyles.pwContainerDirection,
                            justifyContent: this.state.respStyles.pwContainerJustifyContent
                        }}>
                            <View style={{
                                width: this.state.respStyles.pwWrapperWidth
                            }}>
                                <DefaultInput
                                    placeholder="Password"
                                    style={style.input}
                                />
                            </View>
                            <View style={{
                                width: this.state.respStyles.pwWrapperWidth
                            }}>
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
    passwordContainer: {
        flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
        justifyContent: "space-between"
    },
    passwordWrapper: {
        width: Dimensions.get('window').height > 500 ? "100%" : "45%"
    }
});

export default AuthScreen;