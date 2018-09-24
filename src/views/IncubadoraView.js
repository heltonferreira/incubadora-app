import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Styles from '../utils/Styles';
import CardItemIncubadora from '../components/CardItemIncubadora';

const Data = () => {
    let result = [];
    for(let i=0; i<10; i++) {
        result.push({title: 'Teste title', description: 'Description de teste'});
    }
    return result;
}

class Incubadora extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <FlatList 
                    data={ Data() }
                    renderItem={ ({ item }) => (
                        <CardItemIncubadora title={item.title} description={item.description} />
                    )}
                />
            </View>
        );
    }
}

export default Incubadora;
