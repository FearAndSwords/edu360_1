import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = (props) =>
{
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles =
{
    textStyle:
    {
        fontSize: 40,
        color: 'black'
    },
    viewStyle:
    {
        backgroundColor: '#3daf41',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
    }
};

export default Header;