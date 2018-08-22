import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    LoginBodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    LoginFormBox: {
        borderColor: 'red',
        borderWidth: 1,
        height: 80
    }
})

export default Styles;