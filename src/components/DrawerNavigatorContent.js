import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import Styles from '../utils/Styles';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems } from 'react-navigation';
import firebase from 'firebase';


const EdgeDivisor = () => (
    <View style={ Styles.DrawerNavigatorEdgeDivisor } />
);

const UserIconDefault = () => (
    <Image source={require('../assets/user_default_icon.png')} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
);

const LogOut = (props) => {
    firebase.auth().signOut()
    .then(() => {
        props.navigation.navigate('InitialRoutes');
    })
    .catch(err => console.log("Erro ao encerrar a sessão!"));
}

const DrawerNavigatorContent = (props) => (
  <Container style={{ flex: 1 }}>
    <TouchableOpacity style={ Styles.DrawerNavigatorHeader }>
        <UserIconDefault />

        <View style={{ marginLeft: 15 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Empresa Teste</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>Pessoa teste</Text>
        </View>
    </TouchableOpacity>
    <View style={ Styles.DrawerNavigatorContent }>
      <DrawerItems {...props}/>
    </View>
    <EdgeDivisor/>
    <View style={ Styles.DrawerNavigatorFooter }>
        <Text style={ Styles.DrawerNavigatorLabelText }>Configurações</Text>
        <Text style={ Styles.DrawerNavigatorLabelText }>Avalie-nos</Text>
        <TouchableOpacity onPress={ () => LogOut(props)}>
            <Text style={ Styles.DrawerNavigatorLabelText }>Sair</Text>
        </TouchableOpacity>
    </View>
  </Container>
);

export default DrawerNavigatorContent;