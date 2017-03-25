import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Header from './Header';
import firebase from 'firebase';

class Options extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Options'}/>

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.textStyle}> Profile </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.textStyle}> Settings </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
                    <Text style={styles.textStyle}> Home </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} 
                onPress={() => firebase.auth().signOut()}
                onPress={() => firebase.goOffline()}
                onPress={() => this.props.navigator.push({ name: 'loginPage'})}
                >
                    <Text style={styles.textStyle}> Log Out </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button:
    {
        backgroundColor: 'grey',
        borderColor: '#1f5130',
        borderWidth: 1,
        alignItems: 'center',
        height: 55,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    textStyle:
    {
        fontSize: 25,
        color: 'black'
    }
});

export default Options;
