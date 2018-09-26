import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import firebase from 'firebase';
import Styles from '../utils/Styles';
import { Input, Button } from 'native-base';
import Header from '../components/HeaderComponent';
import Icons from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';

const { height, width } = Dimensions.get('window');

const TextInput = props => (
    <View style={ Styles.LoginTextInput }>
        <Input placeholder={props.title} onChangeText={ text => props.setText(text) } {...props.extraProps}/>
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
    <Button 
        style={ Styles.LoginButtonLogin }
        onPress={ () => props.clickAction() }
        onLayout={(event) => {
            let {x, y, width, height} = event.nativeEvent.layout;
            Animated.spring(props.animated, { toValue: { x:0, y }}).start()
        }}
    >
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
    constructor(props){
        super(props);
        this.state = {email: "teste@teste.com", password: "123456"};
        this.animated = new Animated.ValueXY({ x: 0, y: height });
    }

    setEmail(text) {
        if(text)
            this.setState({email: text});
    }

    setSenha(text) {
        if(text)
            this.setState({password: text});
    }

    Login() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate("MainRoutes"))
        .catch(err => console.error("Erro:", err));
    }

    render() {
        return (
            <View style={ Styles.LoginContainer }>
                <Header itemLeft='Login' itemBody={null}/>
                <View style={ Styles.LoginFormBox }>
                    <TextInput title='Email' setText={ (text) => this.setEmail(text) } extraProps={{ textContentType: "emailAddress", defaultValue: "teste@teste.com" }}/>
                    <TextInput title='Senha' setText={ (text) => this.setSenha(text) } extraProps={{ textContentType: "password", defaultValue: "123456" }}/>
                </View>
                <View style={Styles.LoginBodyContainer}>
                    <Animated.View style={ this.animated.getLayout() }>
                        <ButtonLogin text='Login' clickAction={ () => this.Login() } animated={this.animated}/>
                        {/* <EdgeDivisor />
                        <ButtonLoginWithGoogle text='Login com Google'/> */}
                    </Animated.View>
                </View>
            </View>
        );
    }
}

export default LoginView;