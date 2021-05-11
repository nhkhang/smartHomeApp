import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

class LoginScreen extends React.Component{

    state = {
        username: "",
        password: "",
    }

    onChangeHandle(state, value){
        this.setState({
            [state]: value
        })
    }

    render(){
        const {username , password } = this.state;
        return(
            <View style = {styles.container}>
                <Text style={styles.title}>Smart Home App</Text>
                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Usename."
                        placeholderTextColor="#003f5c"
                        value = {username}
                        onChangeText={(value) => this.onChangeHandle('username',value)}
                    />
                </View>   
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        value = {password}
                        onChangeText={(value) => this.onChangeHandle('password',value)}
                    />
                </View>
                <TouchableOpacity style={styles.signinBtn} onPress={() => this.props.navigation('App')}>
                    <Text style={styles.signinText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color:"#5077C5",
        fontWeight: 'bold',
        fontSize: 28,
    },
    inputView:{
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        width: "80%",
        height: 45,
        marginBottom: 20,
        borderBottomColor: "#000000",
        borderWidth: 1,
    },
    TextInput:{
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    signinBtn:{
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#3377FF",
    },
    signinText: {
        fontSize: 24,
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    singupBtn: {
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 4,
    },
})