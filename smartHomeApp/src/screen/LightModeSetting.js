import React from 'react';
import { View, Text} from "react-native";
import styles from '../style/screen'

function LightModeSetting({route}) {
    const {item} = route.params;
    return (
        <View>
            <View>
                <Text>Name:</Text>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text>Status:</Text>
                <Text >{item.state == "1" ? "On" : "Off"}</Text>
            </View>
        </View>
    )
}

export default LightModeSetting;