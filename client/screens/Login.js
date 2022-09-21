import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Login() {

    const [isSigningIn, setIsSigningIn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberDevice, setRememberDevice] = useState('');

    const signInHandler = async () => {

    }

    const signUpHandler = async () => {
        
    }

    return (
        <View style={styles.container}>
            {isSigningIn ? null :
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                />
            }
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <View style={styles.buttonContainer}>
                {isSigningIn ?
                    <Button
                        onPress={signInHandler}
                        title='SIGN IN'
                    /> :
                    <Button
                        onPress={signUpHandler}
                        title='SIGN UP'
                    />
                }
            </View>
            <View style={styles.rememberDeviceContainer}>
                <Text style={styles.text}>Remember this device</Text>
                <Checkbox
                    value={rememberDevice}
                    onValueChange={setRememberDevice}
                />
            </View>
            <TouchableOpacity style={styles.changeSignInContainer} onPress={() =>setIsSigningIn(!isSigningIn)}>
                <Text style={styles.changeSignInText}>{isSigningIn ? "Don't have an account? Sign up" : "Already have an account? Sign in"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA'
    },
    input: {
        borderWidth: 2,
        borderRadius: 15,
        width: '60%',
        height: 40,
        paddingHorizontal: 15,
        borderColor: '#334',
        fontSize: 18,
        marginVertical: '5%',
        fontFamily: 'Roboto',
    },
    buttonContainer: {
        margin: '5%',
    },
    rememberDeviceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 200,
        height: 40,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    changeSignInContainer: {
        marginTop: '5%',
    },
    changeSignInText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#28f',
        textDecorationLine: 'underline',
    }
})