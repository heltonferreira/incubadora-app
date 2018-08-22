import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../utils/Styles';


class Incubadora extends Component {
    render() {
        return (
            <View style={ Styles.LoginContainer }>
                <View style={ Styles.LoginBodyContainer }>
                    <Text>Incubadora</Text>
                </View>
            </View>
        );
    }
}

export default Incubadora;
