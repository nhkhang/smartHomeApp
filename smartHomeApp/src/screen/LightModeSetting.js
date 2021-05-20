import React from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import styles from '../style/screen'

function LightModeSetting({route, navigation}) {
    const {item} = route.params;
    return (
        <View style={styles.containerLightMode}>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Name:</Text>
                <Text style={styles.nameMode}>{item.name}</Text>
            </View>
            <View style={styles.dividingLine}></View>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Status:</Text>
                <Text style={item.state == "1" ? styles.stateModeOn : styles.stateModeOff}>{item.state == "1" ? "On" : "Off"}</Text>
            </View>
            <View style={styles.dividingLine}></View>
            <View style={styles.dateRow}>
                <Text style={styles.titleRow}>Time:</Text>
                <Text style={styles.dateLightMode}>Today</Text>
                
            </View>
            <View style={styles.timeRow}>
                <Text style={styles.timeLightMode}>
                    06:10
                </Text>
            </View>
            
            <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelLightModeButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.saveLightModeButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LightModeSetting;