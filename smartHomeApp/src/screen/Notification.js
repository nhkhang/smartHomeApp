import React from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'

function NotificationsScreen({navigation}) {
    return (
        <View style={styles.content}>
            <Text>Notifications</Text>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate('Details', {
                    screen: 'Notifications',
                })}
            />
        </View>
    );
}

const NotificationsStack = createStackNavigator();

function NotificationsStackScreen() {
    return (
        <NotificationsStack.Navigator>
            <NotificationsStack.Screen name="Notifications" component={NotificationsScreen}/>
            <NotificationsStack.Screen name="Details" component={DetailsScreen}/>
        </NotificationsStack.Navigator>
    )
}

export default NotificationsStackScreen;
    