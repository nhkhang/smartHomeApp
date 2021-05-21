import React from 'react';
import { View, Text} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNPickerSelect from "react-native-picker-select";
import { createStackNavigator} from '@react-navigation/stack'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData'
import { TextInput } from 'react-native-gesture-handler';

function Mode({route}) {
    return (
        <View style={styles.containerMode}>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Name:</Text>
                <TextInput
                    style={styles.nameMode}
                    placeholder="Name Mode"
                />
            </View>
            
            <View style={styles.dividingLine}></View>
            
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Room:</Text>
                <View>
                    
                </View>
            </View>

            <View style={styles.dividingLine}></View>

            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Activated at:</Text>
                <View>
                    
                </View>
            </View>

            <View style={styles.dividingLine}></View>

            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Deactivated at:</Text>
                <View>
                    
                </View>
            </View>

            <View style={styles.dividingLine}></View>
            
            <View>
                <View style={styles.rowLightMode}>
                    <Text style={styles.titleRow}>Light system:</Text>
                </View>
                <View style={styles.lightSystemMode}>
                    <Text>Hùng</Text>
                </View>
            </View>
            
        </View>
    )
}

export default Mode;