import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../utils/Styles';
import Colors from '../utils/Colors';
import { createMaterialTopTabNavigator } from 'react-navigation';
import IncubadoraView from './IncubadoraView';
import IncubadosView from './IncubadosView';
import HeaderComponent from '../components/HeaderComponent';
import BuscarView from './BuscarView';
import IconMenu from '../components/IconMenu';


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

class HomeView extends Component {
  render() {
    const Icon = IconMenu(this.props);
    return (
      <View style={ Styles.HomeContainer }>
        <HeaderComponent icon={ Icon }/>
        <TabNavigator />
      </View>
    )
  }
}

export default HomeView;