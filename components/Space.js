import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Vr from 'react-native-vr';
import Header from './Header';

class Space extends Component
{
    constructor (props)
    {
        super(props);
        this.state =
        {
            paused: false,
            displayMode: Vr.constants.DISPLAY_MODE.EMBEDDED
        }
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Space'}/>

                <Vr
                    src=
                    {{
                        uri: 'https://streams.kolor.com/streams/0e733b85-ce09-47a2-8d8b-992e3eb4cebf/source.03-1080p_HD.mp4',
                        type: Vr.constants.TYPE.MONO,
                        format: Vr.constants.FORMAT.DEFAULT
                    }}
                    paused={this.state.paused}
                    displayMode={this.state.displayMode}
                    style=
                    {{
                        height: 250,
                        width: 350
                    }}
                />

                <View style={styles.optionsStyle}>
                    <TouchableHighlight style={styles.button} onPress={() => this.setState({ paused: !this.state.paused })}>
                        <Text style={styles.textStyle}>    Pause    </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.setState({ displayMode: Vr.constants.DISPLAY_MODE.FULLSCREEN_MONO })}>
                        <Text style={styles.textStyle}> Fullscreen </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.containerStyle}>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.textStyle}> Take Quiz </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.pop(); this.setState({ paused: !this.state.paused })}}>
                        <Text style={styles.textStyle}> Home </Text>
                    </TouchableHighlight>
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
    },
    optionsStyle:
    {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
});

export default Space;
