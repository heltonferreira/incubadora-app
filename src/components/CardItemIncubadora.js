import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';
import Styles from '../utils/Styles';


const UserIconDefault = () => (
    <Image source={require('../assets/user_default_icon.png')} style={ Styles.UserIconDefault }/>
);

const Description = (props) => (
    <View>
        <Text style={{ color: 'black' }}>{props.title}</Text>                    
        <Text style={{ color: '#8492A6' }} >{props.description}</Text>                    
    </View>
);

class CardItemIncubadora extends Component {
    render() {
        return (
            <TouchableOpacity style={{ height: 70 }}>
                <View style={ Styles.CardItemContainer }>
                    <Description title={ this.props.title } description={ this.props.description }/>
                    <UserIconDefault />
                </View>
            </TouchableOpacity>
        );
    }
}

export default CardItemIncubadora;