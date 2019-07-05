import React, { Component } from 'react';
import { 
    View, 
    Button,
    StyleSheet
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={style.container}>
                <MainText>
                    <HeadingText>Please, Log In</HeadingText>
                </MainText>
                <Button title="Switch to Login" />
                <View style={style.inputContainer}>
                    <DefaultInput placeholder="Your E-mail Address" style={style.input} />
                    <DefaultInput placeholder="Password" style={style.input} />
                    <DefaultInput placeholder="Confirm Password" style={style.input} />
                </View>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%",
        margin: 10
    },
    input: {
        backgroundColor:"#eee",
        borderColor:"#bbb"
    }
});

export default AuthScreen;