import React from 'react';
import { Dimensions, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../constants/Colors';

export default class BottomBar extends React.Component
{
    state = {
        search: '',
    };

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

                <Button title="" type="clear"
                    icon={<Icon name="people" size={22} style={styles.icon} />}></Button>

                <Button title="" type="clear"
                    icon={<Icon name="plus" size={22} style={styles.icon} />}></Button>

                <Button title="" type="clear"
                    icon={<Icon name="bell" size={22} style={styles.icon} />}></Button>


                <Button title="" type="clear"
                    icon={<Icon name="settings" size={22} style={styles.icon} />}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    icon: {
        color: Colors.icon,
        paddingHorizontal: 8,
    },
});
