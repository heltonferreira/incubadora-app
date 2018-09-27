import React, { Component } from 'react';
import { View, FlatList, Dimensions, Text, Animated } from 'react-native';
import Styles from '../utils/Styles';
import CardItemIncubadora from '../components/CardItemIncubadora';
import ItemAnimatedLoader from '../components/ItemAnimatedLoader';


const Data = () => (
    Array(10).fill({title: 'Teste title', description: 'Description de teste'})
)

const FlatListAnimatedLoader = () => (
    <View style={ Styles.IncubadoraViewContainer }>
        <FlatList 
            data={ [1,2,3,4,5] }//Apenas para chamar 5 vezes
            renderItem={ ({ item }) => (
                <ItemAnimatedLoader key={item}/>
            )}
            keyExtractor={(item, index) => index }//Adicona um indice somente para não aparecer warnings
            ListHeaderComponent={() => { return <View style={{ height: 10 }}/> }} //define um margem no inicio da lista
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
        }, 3000);
    }

    render() {
        if(this.state.status === 'loading') {
            return <FlatListAnimatedLoader />
        }
        return (
            <View style={ Styles.IncubadoraViewContainer }>
                <FlatList
                    data={ Data() }
                    renderItem={ ({ item }) => (
                        <CardItemIncubadora title={item.title} description={item.description}/>
                    )}
                    keyExtractor={(item, index) => ''+index}
                />
            </View>
        );
    }
}

export default Incubadora;