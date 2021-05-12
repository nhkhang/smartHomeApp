import React from 'react';
import { View, Text} from "react-native";
import styles from '../style/screen'

function RoomsDetail({route}) {
    const {rooms} = route.params;
    return (
        <View style={styles.content}>
            <Text>{rooms}</Text>
        </View>
    )
}

export default RoomsDetail;