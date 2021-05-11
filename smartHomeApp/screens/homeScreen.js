import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

class HomeScreen extends React.Component{

    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.title}>Smart Home App</Text>
                <TouchableOpacity style={styles.logoutBtn} onPress={() => this.props.navigation('Auth')}>
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logoutBtn:{
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#3377FF",
    },
    logoutText: {
        fontSize: 24,
        fontStyle: "normal",
        color: "#FFFFFF"
    },
})