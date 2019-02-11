import React, { Component } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Data from '../contents/Data';
import Colors from '../constants/Colors';

export default class NewsFeed extends Component
{
    render()
    {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={Data.news}
                renderItem={({ item, index }) => (
                    <View>
                        <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
                            <Image
                                style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
                                source={item.avatarUrl}
                            />
                            <Text style={{ color: 'black', fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}>{item.username}</Text>
                            <Ionicons name="ios-more" size={30} color="black" style={{ lineHeight: 60, marginRight: 15 }} />
                        </View>

                        <Image style={styles.image} source={item.imageUrl} />

                        <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
                            <Ionicons name="ios-heart-empty" size={22} color="black" style={{ marginTop: 12, marginLeft: 15 }} />
                            <Ionicons name="ios-git-merge" size={22} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
                            <View style={{ flex: 1 }} />
                            <SimpleLineIcons name="tag" size={22} color="black" style={{ marginTop: 12, marginRight: 20 }} />
                        </View>

                        <View style={{ marginBottom: 20, paddingLeft: 15 }}>
                            <Text style={styles.mainText}>{item.text}</Text>
                        </View>

                        <View style={{ flex: 1, height: 10, backgroundColor: Colors.grey100 }} />
                    </ View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    mainText: {
        flexGrow: 1,
        fontSize: 14,
        color: Colors.text,
    },
});
