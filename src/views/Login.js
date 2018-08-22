import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Styles from '../utils/Styles';
import { Input, Button } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';


class Login extends Component {
    render() {
        return (
            <View style={ Styles.LoginContainer }>
                <View style={ Styles.LoginBodyContainer }>
                    <View style={ Styles.LoginFormBox }>
                        <Input placeholder='Email'/>
                    </View>

                    <View style={ Styles.LoginFormBox }>
                        <Input placeholder='Senha'/>
                    </View>

                    <View style={{ flex: 1, position: 'relative', flexDirection: 'column', alignItems: 'stretch'}}>
                        <Button style={{ height: 60, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: '#1F5289'}}>
                            <Text style={{ color:'white', fontSize: 16, textAlign: 'center' }}>Login</Text>
                        </Button>
                        <View style={{ height: 0.8, backgroundColor: '#999', marginHorizontal: 20 }} />
                        <Button style={{ height: 60, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: '#9C0003', flexDirection: 'row' }}>
                            <Icons name='google' size={ 28 } color='white' style={{ marginLeft: -100, paddingLeft: 0 }}/>
                            <Text style={{ color:'white', fontSize: 16, textAlign: 'center', marginLeft: 60 }}>Login com Google</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
