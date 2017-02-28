import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import Header from './Header';

class Home extends Component
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
                <ScrollView>
                    <Header headerText = {'Home Page'}/>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('dinoPage')}>
                        <Text style={styles.textStyle}>Dinosaur</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('spacePage')}>
                        <Text style={styles.textStyle}>Space</Text>
                    </TouchableHighlight>
                </ScrollView>

                <TouchableHighlight style={styles.optButton} onPress={() => this.navigate('optionsPage')}>
                    <Text style={styles.textStyle}>Options</Text>
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
        backgroundColor: '#F5FCFF'
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
    optButton:
    {
        backgroundColor: '#63a579',
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
    },
});

export default Home;
