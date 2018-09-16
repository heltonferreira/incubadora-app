import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Styles from '../utils/Styles';
import { Input, Button } from 'native-base';
import Header from '../components/HeaderComponent';
import Icons from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';


const TextInput = props => (
    <View style={ Styles.LoginTextInput }>
        <Input placeholder={props.title} />
        <View style={ Styles.LoginTextInputEdge }/>
    </View>
)

const EdgeDivisor = props => (
    <View style={ Styles.EdgeDivisor }>
        <View style={ Styles.LoginEdgeDivisorLine } />
        <View style={{ zIndex: 99, position: 'absolute', alignSelf: 'center' }}>
            <Text style={ Styles.LoginEdgeDivisorText }>ou</Text>
        </View>
    </View>
)

const ButtonLogin = props => (
    <Button style={ Styles.LoginButtonLogin }>
        <Text style={{ color:'white', fontSize: 16, textAlign: 'center' }}>{props.text}</Text>
    </Button>
)

const ButtonLoginWithGoogle = props => (
    <Button style={ Styles.LoginButtonLoginWithGoogle }>
        <Icons name='google' size={ 28 } color='white' style={{ marginLeft: -100, paddingLeft: 0 }}/>
        <Text style={{ color:'white', fontSize: 16, textAlign: 'center', marginLeft: 60 }}>{props.text}</Text>
    </Button>
)

class LoginView extends Component {
    render() {
        return (
            <View style={ Styles.LoginContainer }>
                <Header itemLeft='Login' itemBody={null}/>
                <View style={ Styles.LoginFormBox }>
                    <TextInput title='Email' />
                    <TextInput title='Senha' />
                </View>

                <View style={ Styles.LoginBodyContainer }>
                    <ButtonLogin text='Login'/>
                    {/* <EdgeDivisor /> 
                    <ButtonLoginWithGoogle text='Login com Google'/> */}
                </View>
            </View>
        );
    }
}

export default LoginView;