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
import validate from '../../utility/validation';

import BackgroundImage from '../../assets/beautiful-place.jpg'

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
            }
        }
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

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
        }

        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid:
                            key === 'password'
                                ? validate(
                                    prevState.controls.confirmPassword.value,
                                    prevState.controls.confirmPassword.validationRules,
                                    connectedValue
                                )
                                : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    }
                }
            };
        });
        console.log(this.state)
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
                            value={this.state.controls.email.value}
                            onChangeText={val => this.updateInputState('email', val)}
                            valid={this.state.controls.email.valid}
                            touched={this.state.controls.email.touched}
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
                                    value={this.state.controls.password.value}
                                    onChangeText={val => this.updateInputState('password', val)}
                                    valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
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
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={val => this.updateInputState('confirmPassword', val)}
                                    valid={this.state.controls.confirmPassword.valid}
                                    touched={this.state.controls.confirmPassword.touched}
                                />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground
                        color="black"
                        onPress={this.loginHandler}
                        disabled={
                            !this.state.controls.password.valid ||
                            !this.state.controls.confirmPassword.valid || 
                            !this.state.controls.email.valid
                        }
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