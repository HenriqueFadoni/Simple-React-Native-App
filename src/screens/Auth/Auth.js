import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TextInput,
    StyleSheet
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={style.container}>
                <Text>Auth Screen</Text>
                <Button title="Switch to Login" />
                <View style={style.inputContainer}>
                    <TextInput placeholder="Your E-mail Address" style={style.input} />
                    <TextInput placeholder="Password" style={style.input} />
                    <TextInput placeholder="Confirm Password" style={style.input} />
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
        width: "80%"
    },
    input: {
        width: "100%"
    }
});

export default AuthScreen;