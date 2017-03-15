//no need for this component anymore!!

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';


class LoginForm extends Component
{

    

    render()
    {
        return (
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <TextInput 
                    onChangeText={email => this.setState({ email })}
                    value={ this.state.email }
                    label='Email'
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    keyboardType="email-address"      
                    autoCapitalize='none'
                />
                <TextInput 
                    //ref='2'
                    placeholder="password"
                    value={ this.state.password }
                    onChangeText={ password => this.setState({ password})}
                    label='password'
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
            </KeyboardAvoidingView>
        );
    }
}

// //this function moves the input field on to the next box
// focusNextField = (nextField) => {
//     this.refs[nextField].focus();
// };

//my styleSheet
const styles = StyleSheet.create(
{
    container:
    {
        padding: 20
    },
    input:
    {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10        
    }
});

export default LoginForm;


