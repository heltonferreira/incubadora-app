import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

const Styles = StyleSheet.create({
    //LoginView---------------------------------------
    //------------------------------------------------
    LoginContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    LoginBodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    LoginFormBox: {
        flex: 1 / 2,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    LoginTextInput: {
        height: 45,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    LoginButtonLogin: {
        height: 60,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: Colors.buttonLoginColor
    },
    LoginButtonLoginWithGoogle: {
        height: 60,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10, backgroundColor: Colors.buttonLoginComGoogle, flexDirection: 'row'
    },
    //headerview---------------------------------------------------
    HeaderContainer: {
        backgroundColor: Colors.headerColor
    },
    EdgeDivisor: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    }
})

export default Styles;