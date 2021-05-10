import React from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'

function SettingsScreen({navigation}) {
    return (
        <View style={styles.content}>
            <Text>Settings</Text>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate('Details', {
                    screen: 'Settings',
                })}
            />
        </View>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
            <SettingsStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen;
    