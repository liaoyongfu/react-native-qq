/**
 *  * Created by liaoyf on 2017/9/29 0029.
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './components/login/Login';
import Home from './components/home/Home';

const AwesomeProject = StackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}, {
    // initialRouteName: 'Home'
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);