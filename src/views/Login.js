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
        <View style={{backgroundColor: '#999', height: 0.8, marginTop: -10}}/>
    </View>
)

const EdgeDivisor = props => (
    <View style={Styles.EdgeDivisor}>
        <View style={{ flex: 1, height: 0.8, backgroundColor: '#999', marginHorizontal: 20 }} />
        <View style={{ zIndex: 99, position: 'absolute', alignSelf: 'center' }}>
            <Text style={{ backgroundColor: 'white', paddingHorizontal: 10, textAlign: 'center' }}>ou</Text>
        </View>
    </View>
)

class Login extends Component {
    render() {
        return (
            <View style={ Styles.LoginContainer }>
                <Header itemLeft='Login' itemBody={null}/>
                <View style={ Styles.LoginFormBox }>
                    <TextInput title='Email' />
                    <TextInput title='Senha' />
                </View>

                <View style={ Styles.LoginBodyContainer }>
                    <Button style={ Styles.LoginButtonLogin }>
                        <Text style={{ color:'white', fontSize: 16, textAlign: 'center' }}>Login</Text>
                    </Button>
                    <EdgeDivisor />
                    <Button style={ Styles.LoginButtonLoginWithGoogle }>
                        <Icons name='google' size={ 28 } color='white' style={{ marginLeft: -100, paddingLeft: 0 }}/>
                        <Text style={{ color:'white', fontSize: 16, textAlign: 'center', marginLeft: 60 }}>Login com Google</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Login;