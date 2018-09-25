import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginView from './views/LoginView';
import IncubadoraView from './views/IncubadoraView';
import HomeView from './views/HomeView';
import CadastrarParceiros from './views/CadastrarParceiros';
import DesenvolvimentoNegocio from './views/DesenvolvimentoNegocio';
import Mensagens from './views/Mensagens';
import Solicitacoes from './views/Solicitacoes';
import DrawerNavigatorContent from './components/DrawerNavigatorContent';
import Styles from './utils/Styles';


const MainStack = createDrawerNavigator({
        Home: {
            screen: HomeView,
            navigationOptions: {
                drawerLabel: 'Início'
            }
        },
        Incubadora: {
            screen: IncubadoraView,
            navigationOptions: {
                drawerLabel: 'Incubadora'
            }
        },
        CadastrarParceiros: {
            screen: CadastrarParceiros,
            navigationOptions: {
                drawerLabel: 'Cadastrar Parceiros'
            }
        },
        DesenvolvimentoNegocio: {
            screen: DesenvolvimentoNegocio,
            navigationOptions: {
                drawerLabel: 'Desenvolvimento de Negócios'
            }
        },
        Mensagens: {
            screen: Mensagens,
            navigationOptions: {
                drawerLabel: 'Mensagens'
            }
        },
        Solicitacoes: {
            screen: Solicitacoes,
            navigationOptions: {
                drawerLabel: 'Solicitações'
            }
        }
    },
    {
        initialRouteName: 'Home',
        contentComponent: DrawerNavigatorContent,
        contentOptions: {
            labelStyle: Styles.DrawerNavigatorLabelText,
            itemStyle: Styles.DrawerNavigatorLabelText
        }
    }
);

const Routes = createStackNavigator({
        InitialRoutes: {
            screen: LoginView
        },
        MainRoutes: {
            screen: MainStack
        },
    },
    {
        initialRouteName: 'MainRoutes',
        headerMode: 'none'//Remove o Header default
    }
);

export default Routes;