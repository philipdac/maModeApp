import React from 'react';
import { Dimensions, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../constants/Colors';

export default class TopBar extends React.Component
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
                    icon={<Icon name="camera" size={22} style={styles.icon} />}></Button>

                <TextInput style={styles.searchContainer} placeholder="Search"></TextInput>

                <Button title="" type="clear"
                    icon={<Icon name="bubble" size={22} style={styles.icon} />}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        borderWidth: 0,
        color: 'white',
        height: 38,
        paddingLeft: 16,
        paddingTop: 11,
        width: Dimensions.get('window').width,
        maxWidth: 300,
        marginBottom: 20,
    },
    icon: {
        color: Colors.icon,
        paddingHorizontal: 8,
    },
});
