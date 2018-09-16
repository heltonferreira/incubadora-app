import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../utils/Styles';


class Incubadora extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>IncubadoraView</Text>
            </View>
        );
    }
}

export default Incubadora;
