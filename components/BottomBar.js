import React, { Component } from 'react'
import { Dimensions, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../constants/Colors';

export default class BottomBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            search: '',
        };
    }

    updateSearch = search =>
    {
        this.setState({ search });
    };

    render()
    {
        const { search } = this.state;

        return (
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

                <Button title="" type="clear" onPress={this._logout}
                    icon={<Icon name="logout" size={22} style={styles.icon} />}></Button>
            </View>
        );
    }
    _logout = () =>
    {
        // this.props.navigation.navigate('Login');
    };
}
const styles = StyleSheet.create({
    icon: {
        color: Colors.icon,
        paddingHorizontal: 10,
        paddingBottom: 8,
    },
});
