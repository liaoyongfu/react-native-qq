import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './js/components/login/Login';
import Home from './js/components/home/Home';
import Chat from './js/components/chat/Chat';
import Person from './js/components/person/Person';

const App = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    Chat: {
        screen: Chat
    },
    Person: {
        screen: Person
    }
}, {
    // initialRouteName: 'Home'
    navigationOptions: {
        header: null
    }
});

export default App;