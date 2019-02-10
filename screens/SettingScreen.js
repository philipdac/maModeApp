import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SettingScreen extends Component
{
    render()
    {
        return (
            <View>
                <Text> User's profile </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
