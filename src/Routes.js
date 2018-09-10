import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './views/Login';
import Incubadora from './views/Incubadora';



const MainStack = createStackNavigator({
        Home: {
            screen: Incubadora
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const Routes = createStackNavigator({
        Initial: {
            screen: Login
        },
        MainRoutes: {
            screen: MainStack
        },
    },
    {
        initialRouteName: 'Initial',
        headerMode: 'none'//Remove o Header default
    }
);

export default Routes;