import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';

export default class App extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <LoginScreen />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
