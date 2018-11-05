import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Root } from 'native-base';
import Styles from '../utils/Styles';
import ItemAnimatedLoader from '../components/ItemAnimatedLoader';
import CardItemIncubadora from '../components/CardItemIncubadora';
import HeaderComponent from '../components/HeaderComponent';
import IconMenu from '../components/IconMenu';

const Data = () => (
  Array(10).fill({title: 'Projeto', description: 'Descrição do projeto'})
)

const FlatListAnimatedLoader = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
      <FlatList 
          data={ [1,2,3,4,5,6,7,8] }//Apenas para chamar 5 vezes
          renderItem={ ({ item }) => (
              <ItemAnimatedLoader key={item}/>
          )}
          keyExtractor={(item, index) => index }//Adicona um indice somente para não aparecer warnings
          ListHeaderComponent={() => { return <View style={{ height: 10 }}/> }} //define um margem no inicio da lista
      />
  </View>
)

class DesenvolvimentoNegocio extends Component {
  constructor(props){
    super(props);
    this.state = { status: 'loading' }
  }

  componentDidMount() {
    let count = 10;
    setTimeout(() => {
        this.setState({status: 'done'});
    }, 3000);
  }

  render() {
    const Icon = IconMenu(this.props);    
    if(this.state.status === 'loading')
      return (
        <Root>
          <HeaderComponent icon={ Icon }/>
          <FlatListAnimatedLoader />
        </Root>
      );

    return (
      <Root>
        <HeaderComponent icon={ Icon }/>
        <FlatList
            data={ Data() }
            renderItem={ ({ item, index }) => (
                <CardItemIncubadora title={ `${item.title} ${index}` } description={ `${item.description} ${index}` }/>
            )}
            keyExtractor={(item, index) => ''+index}
        />
      </Root>
    )
  }
}

export default DesenvolvimentoNegocio;