import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

class AuthLoadingScreen extends React.Component{

    render(){
        return(
            <View style = {styles.container}>
                
            </View>
        )
    }
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})