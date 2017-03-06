import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, AppRegistry } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component
{
    constructor()
    {
        super();
        this.navigate = this.navigate.bind(this)
    }

    navigate(name)
    {
        this.props.navigator.push(
            {
                name
            });
    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('./logo.jpg')}
                    />

                    <Text style={styles.title}>An educational app for viewing 360 degree videos</Text>
                </View>
                <View style={styles.formContainer}>
                <LoginForm />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => this.navigate('homePage')}>LOGIN</Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:
    {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:
    {
        width: 100,
        height: 100
    },
    title:
    {
        color: 'white',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    buttonContainer:
    {
        backgroundColor: '#3498FF',
        paddingVertical: 15
    },
    buttonText:
    {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

export default Login;