import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends Component
{
    render()
    {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
