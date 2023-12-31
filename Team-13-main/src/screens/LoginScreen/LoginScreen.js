import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Appbar, PaperProvider, Button } from 'react-native-paper';
import { initFirebaseApp, getFirebaseStore, signIn } from '../../utils/firebase'


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const sendData = async () => {
        const user = await signIn(email, password)
        if (user != null) {
            navigation.navigate("Community")
        }
        else {
            console.log("Invalid User / Password")
        }
    }

    return (
        //<>
        <View style={styles.container}>
            {/* <Text style={styles.header}>Log In</Text> */}
            <View style={styles.hero}>
                <Image
                    source={require('./empower.png')}
                    style={[styles.logo, styles.heroImage]}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.space}></View>
        
            <View style={styles.content}>
                <View style={styles.hero}>

                    <Text style={styles.label}>Email :</Text>
                    <TextInput
                        label="Email: "
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Password :</Text>
                    <TextInput
                        label="Password: "
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        style={styles.input}
                    />

                    <Button
                        mode="contained"
                        onPress={sendData}
                        style={styles.button}
                        labelStyle={styles.buttonText}>
                        Log In
                    </Button>
                </View>
            </View>
        </View>
        //</>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#d496a7',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -30,
        marginBottom: 20
    },
    hero: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginBottom: -70
    },
    space: {
        height: 40,
    },
    heroImage: {
        width: '100%',
        height: 400,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black',
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#f2d3e1',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        color: 'black',
    },
    button: {
        backgroundColor: '#d496a7',
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    },
};

export default Login;