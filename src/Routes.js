import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './views/Login';
import Incubadora from './views/Incubadora';

const Routes = createStackNavigator({
        Initial: {
            screen: Login
        },
        MainRoutes: {
            screen: Incubadora
        },
    },
    {
        initialRouteName: 'Initial'
    }
);

export default Routes;