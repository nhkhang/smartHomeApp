import React from 'react';
import { View, Text} from "react-native";
import styles from '../style/screen'

function DetailsScreen({route}) {
    const {screen} = route.params;
    return (
        <View style={styles.content}>
            <Text>{screen} details</Text>
        </View>
    )
}

export default DetailsScreen;