import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, AppRegistry, KeyboardAvoidingView, TextInput } from 'react-native';
//import LoginForm from './LoginForm';
import firebase from 'firebase';
//import Firebase from 'firebase';
import Spinner from './Spinner';

class Login extends Component
{
    constructor()
    {
        super();
        this.state = { email: '', password: '', error: '', loading: false, loggedIn: null };
        this.navigate = this.navigate.bind(this)
    }    

    componentWillMount() {

        //check to see if there is already a firebase connection/app
        if(firebase.apps.length === 0) {
            firebase.initializeApp({
                apiKey: 'AIzaSyAZHP7PREhyxPkHqGUaM3cVp97qNZWXL9c',
                authDomain: 'authentication-9e6e9.firebaseapp.com',
                databaseURL: 'https://authentication-9e6e9.firebaseio.com',
                storageBucket: 'authentication-9e6e9.appspot.com',
                messagingSenderId: '166330697411'
            });
        }
        

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }            
        });
    }    

    moveToNextScreen() {
        this.navigate('homePage');
    }

    onButtonPress() {
        //console.log("working");
        const { email, password } = this.state;

        this.setState({ error: '', loading: true});
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((this.onLoginFail.bind(this)))
            })
    }

    onLoginFail() {
        this.setState({ 
            loading: false,
            error: 'Authentication Failed'
        })
    }

    onLoginSuccess() {
        console.log("move screenb  :( ");
        this.moveToNextScreen();
        // this.setState({ 
        //     email: '',
        //     password: '',
        //     loading: false,
        //     error: ''
        // });
        //console.log("move screenb  :( ");
        
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner  />;
        }

        return (
            <Text 
            style={styles.buttonText} 
            onPress={() => this.onButtonPress()}
            //onPress={() => this.navigate('homePage')}
            >
            LOGIN
            </Text>
            );
        }

    navigate(name)
    {
        //console.print("nav worked");
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
                    <KeyboardAvoidingView behaviour="padding" style={styles.container2}>
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

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>

                    <TouchableOpacity style={styles.buttonContainer}>
                        {this.renderButton()}
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
    container2:
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
    },
    buttonText:
    {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        padding: 20
    }
});

export default Login;