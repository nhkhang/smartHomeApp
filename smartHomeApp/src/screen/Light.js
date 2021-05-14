import React from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function DetailsScreen({route}) {
    const {screen} = route.params;
    if({screen}.screen =="General"){
        return(
            <View style={styles.container}>
                <Text>Light {screen}</Text>
            </View>
        )
    }
    else{
        return (
            <View style = {styles.container}>
                <View style={styles.lightCard}>
                    <View style={styles.lightItem}>
                        <View style={styles.headerLightItem}>
                            <Text>Light 1</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name={'toggle-switch-off'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bodyLightItem}>
                            <MaterialCommunityIcons name={'lightbulb-on'} size={50} color={"#000000"} />
                        </View>
                    </View>
                    <View style={styles.lightItem}>
                        <View style={styles.headerLightItem}>
                            <Text>Light 1</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name={'toggle-switch-off'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bodyLightItem}>
                            <MaterialCommunityIcons name={'lightbulb-on'} size={50} color={"#000000"} />
                        </View>
                    </View>              
                </View>
            </View>
        )
    }
}

export default DetailsScreen;