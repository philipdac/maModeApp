import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: 'maMode@gmail.com', password: 'Abcd@4321',
            lockedUsername: 'maMode@gmail.com', lockedPassword: 'Abcd@4321',
        };
    }
    render()
    {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.loginContainer} behavior="padding" keyboardVerticalOffset={
                    Platform.select({
                        ios: () => 0,
                        android: () => -200
                    })()
                }>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')}></Image>

                    <TextInput style={[styles.input]} placeholder='Email, phone number or username'
                        autoCapitalize='none' autoCorrect={false} keyboardType='email-address'
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}></TextInput>

                    <TextInput style={[styles.input, styles.inputPassword]} placeholder='Password' secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}></TextInput>

                    <TouchableOpacity style={[styles.buttonContainer]}
                        onPress={this._loginAsync}>
                        <Text style={[styles.buttonText]}>Log In</Text>
                    </TouchableOpacity>

                    <Text style={[styles.subLogin, styles.subText]}>Forgot your login details? Get help</Text>
                    <Text style={[styles.subText]}>OR</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Button title="Log in with Facebook" type="clear"
                            icon={<Icon name="logo-facebook" size={28} style={styles.iconLeft} />}></Button>
                        <Button title="" type="clear"
                            icon={<Icon name="ios-more" size={20} style={styles.iconRight} />}></Button>
                    </View>

                    <Text style={[styles.subText]}>Don't have an account? Sign up.</Text>
                </KeyboardAvoidingView>
            </View>
        );
    }
    _loginAsync = async () =>
    {
        if (this.state.username != this.state.lockedUsername || this.state.lockedPassword != this.state.password) {
            return;
        }

        console.log(this.props);

        await AsyncStorage.setItem('userToken', 'authenticated');
        this.props.navigation.navigate('Home');
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 120,
        width: 120,
        marginBottom: 10,
    },
    inputContainer: {
        padding: 20,
    },
    input: {
        borderColor: 'lightgray',
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 12,
        marginBottom: 12,
        height: 40,
        width: Dimensions.get('window').width,
        maxWidth: 320,
    },
    buttonContainer: {
        borderColor: '#2196F3',
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: Dimensions.get('window').width,
        maxWidth: 320,
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#2196F3',
    },
    subLogin: {
        marginTop: 20,
    },
    subText: {
        color: 'lightgray',
    },
    iconLeft: {
        color: '#2196F3',
        paddingRight: 10,
    },
    iconRight: {
        color: '#2196F3',
        paddingLeft: 10,
        paddingTop: 8,
    },
});
