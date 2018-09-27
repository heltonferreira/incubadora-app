import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
    //LoginView---------------------------------------
    //------------------------------------------------
    LoginContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    LoginEdgeDivisor: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    LoginEdgeDivisorLine: {
        flex: 1, 
        height: 0.8, 
        backgroundColor: '#999', 
        marginHorizontal: 20
    },
    LoginEdgeDivisorText: {
        backgroundColor: 'white', 
        paddingHorizontal: 10, 
        textAlign: 'center'
    },
    LoginBodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
    LoginTextInputEdge: {
        backgroundColor: '#999', 
        height: 0.8, 
        marginTop: -10
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
    //HeaderView---------------------------------------------------
    //-------------------------------------------------------------
    HeaderContainer: {
        height: 60,
        marginBottom: 0,
        paddingBottom: 0,
        borderBottomWidth: 0,
        elevation: 0
    },
    HeaderHolder: {
        backgroundColor: Colors.headerColor,
        marginBottom: 0,
        paddingBottom: 0,
        borderBottomWidth: 0,
        elevation: 0
    },
    HeaderTitle: {
        marginLeft: 20, 
        fontSize: 18,
        fontWeight: 'bold'
    },
    //HomeView-----------------------------------------------------
    //-------------------------------------------------------------
    HomeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    //DrawerNavigatorContent---------------------------------------
    //-------------------------------------------------------------
    DrawerNavigatorEdgeDivisor: {
        width: null,
        height: 0.8, 
        backgroundColor: Colors.edgeDivisorDrawerNavigatorColor
    },
    DrawerNavigatorHeader: {
        flex: 1/4, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: Colors.drawerHeaderBackground
    },
    DrawerNavigatorFooter: {
        flex: 1/4, 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start', 
        backgroundColor: Colors.drawerContentBackground,
        paddingLeft: 15
    },
    DrawerNavigatorLabelText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    DrawerNavigatorContent: {
        flex: 2/4, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        alignContent: 'space-around', 
        backgroundColor: Colors.drawerContentBackground
    },
    //CardItemIncubadora------------------------------------------
    //------------------------------------------------------------
    CardItemContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    UserIconDefault: {
        height: 60, 
        width: 60, 
        resizeMode: 'contain'
    },
    //IncubadoraView----------------------------------------------
    //------------------------------------------------------------
    IncubadoraViewContainer: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'stretch', 
        backgroundColor: 'white'
    }
})

export default Styles;