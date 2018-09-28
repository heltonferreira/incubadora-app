import React, { Component } from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import Styles from '../utils/Styles';
import { Toast, Root } from 'native-base';
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

const ToastAction = (props) => {
    Toast.show({
        text: 'Aperte mais uma vez para sair do App.',
        position: 'bottom',
        buttonText: 'OK',
        duration: 5000,
        onClose: () => { props.setValue() }
    })
}

class Incubadora extends Component {
    constructor(props){
        super(props);
        this.state = {status: 'loading', exit: false};
    }

    componentDidMount() {
        this.handlerDidFocus = this.props.navigation.addListener('didFocus', () => {
            this.backHandle = BackHandler.addEventListener('hardwareBackPress', () => this.exitApp())
        });
        this.handlerWillBlur = this.props.navigation.addListener('willBlur', () => {
            //this.handlerDidFocus.remove();
            this.backHandle.remove();
        })
        this.loadContent();
    }

    componentWillUnmount() {
        this.backHandle.remove();
        this.handlerDidFocus.remove();
        this.handlerWillBlur.remove();
    }

    exitApp(){
        if(this.state.exit){
            BackHandler.exitApp();
        }
    
        ToastAction({ setValue: () => this.setState({exit: true}) });
        return true;
    }

    loadContent() {
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
            <Root>
                <View style={ Styles.IncubadoraViewContainer }>
                    <FlatList
                        data={ Data() }
                        renderItem={ ({ item }) => (
                            <CardItemIncubadora title={item.title} description={item.description}/>
                        )}
                        keyExtractor={(item, index) => ''+index}
                    />
                </View>
            </Root>
        );
    }
}

export default Incubadora;