import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component
{
    render()
    {
        return <AppContainer />;
    }
}
