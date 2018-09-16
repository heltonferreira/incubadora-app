import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../utils/Styles';
import Colors from '../utils/Colors';
import { createMaterialTopTabNavigator } from 'react-navigation';
import IncubadoraView from './IncubadoraView';
import IncubadosView from './IncubadosView';
import HeaderComponent from '../components/HeaderComponent';
import BuscarView from './BuscarView';
import Icons from 'react-native-vector-icons/Entypo';


const TabNavigator = createMaterialTopTabNavigator({
        Incubadora: {
            screen: IncubadoraView
        },
        Incubados: {
            screen: IncubadosView
        },
        Buscar: {
            screen: BuscarView
        }
    },
    {
        initialRouteName: 'Incubadora',
        order: ['Incubadora', 'Incubados', 'Buscar'],
        tabBarOptions: {
            style: { backgroundColor: Colors.tabBarColor },
            labelStyle: { fontWeight: 'bold' },
            indicatorStyle: { backgroundColor: Colors.tabIndicatorColor, height: 3 },
            activeTintColor: 'white',
            inactiveTintColor: '#FFF7',
            upperCaseLabel: true
        }
    }
)

const Icon = props => (
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Icons name='menu' size={28} color='white' />
    </TouchableOpacity>
);

class HomeView extends Component {
  render() {
    return (
      <View style={ Styles.HomeContainer }>
        <HeaderComponent icon={() => Icon(this.props)}/>
        <TabNavigator />
      </View>
    )
  }
}

export default HomeView;