import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../constants/Colors';

import NewsFeed from '../components/NewsFeed';
import TopBar from '../components/TopBar';

export default class HomeScreen extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TopBar />
                <NewsFeed />

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Button title="" type="clear"
                        icon={<Icon name="home" size={22} style={styles.icon} />}></Button>
                    <View style={{ flex: 1 }} />

                    <Button title="" type="clear"
                        icon={<Icon name="people" size={22} style={styles.icon} />}></Button>
                    <View style={{ flex: 1 }} />

                    <Button title="" type="clear"
                        icon={<Icon name="plus" size={22} style={styles.icon} />}></Button>
                    <View style={{ flex: 1 }} />

                    <Button title="" type="clear"
                        icon={<Icon name="bell" size={22} style={styles.icon} />}></Button>
                    <View style={{ flex: 1 }} />

                    <Button title="" type="clear" onPress={() => navigate('Login')}
                        icon={<Icon name="logout" size={22} style={styles.icon} />}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        color: Colors.icon,
        paddingHorizontal: 10,
        paddingBottom: 8,
    },
});
