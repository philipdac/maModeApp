import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BottomBar from './components/BottomBar';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
        Logout: BottomBar,
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
