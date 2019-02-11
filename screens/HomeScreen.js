import React, { Component } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Data from '../contents/Data';
import Colors from '../constants/Colors';

import NewsFeed from '../components/NewsFeed';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

export default class HomeScreen extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <TopBar />
                <NewsFeed />
                <BottomBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
