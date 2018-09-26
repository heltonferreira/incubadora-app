import React, { Component } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import Styles from '../utils/Styles';
import CardItemIncubadora from '../components/CardItemIncubadora';
import ItemAnimatedLoader from '../components/ItemAnimatedLoader';


const Data = () => (
    Array(10).fill({title: 'Teste title', description: 'Description de teste'})
)

const FlatListAnimatedLoader = () => (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: 'white' }}>
        <FlatList 
            data={ [1,2,3,4,5] }//Apenas para chamar 5 vezes
            renderItem={ (item) => (
                <ItemAnimatedLoader />
            )}
            keyExtractor={(item, index) => ''+index}//Adicona um indice somente para não aparecer warnings
        />
    </View>
)

class Incubadora extends Component {
    constructor(props){
        super(props);
        this.state = {status: 'loading'};
    }

    componentDidMount() {
        this.LoadContent();
    }

    LoadContent() {
        let count = 10;
        setTimeout(() => {
            this.setState({status: 'done'});
        }, 2000);
    }

    render() {
        if(this.state.status === 'loading') {
            return <FlatListAnimatedLoader />
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: 'white' }}>
                <FlatList 
                    data={ Data() }
                    renderItem={ ({ item }) => (
                        <CardItemIncubadora title={item.title} description={item.description} />
                    )}
                    keyExtractor={(item, index) => ''+index}
                />
            </View>
        );
    }
}

export default Incubadora;