import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import styles from '../style/screen';

const connect = () => {
    fetch('http://10.42.0.1:3000/light', { // Add your IP address here
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id: "1",
            name: "LED",
            data: "1",
            unit: ""
        })
    })
    .then((response)=>response.json().then(data => alert(data.status)))
    .catch((error) =>{
        console.error(error);
    });
}

function Test({navigation}){
    return (
        <View style={styles.containerSignIn}>
            <TouchableOpacity style ={styles.signinBtn} onPress= {async() => connect()}>
                <Text style={styles.signinText}>Connect</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test;