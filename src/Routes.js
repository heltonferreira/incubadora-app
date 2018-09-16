import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LoginView from './views/LoginView';
import IncubadoraView from './views/IncubadoraView';
import HomeView from './views/HomeView';


const MainStack = createDrawerNavigator({
        Home: {
            screen: HomeView
        },
        Incubadora: {
            screen: IncubadoraView
        }
    },
    {
        initialRouteName: 'Home',        
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