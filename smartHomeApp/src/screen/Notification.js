import React from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'

function NotificationsScreen({navigation}) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.warningNoti}>Warning</Text>
                <Text style={styles.timeNoti}>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.settingNoti}>Setting</Text>
                <Text>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.alertNoti}>Alert</Text>
                <Text>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.warningNoti}>Warning</Text>
                <Text>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.settingNoti}>Setting</Text>
                <Text>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                <Text style={styles.alertNoti}>Alert</Text>
                <Text>12:05 AM Today</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const NotificationsStack = createStackNavigator();

function NotificationsStackScreen() {
    return (
        <NotificationsStack.Navigator>
            <NotificationsStack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <NotificationsStack.Screen name="Details" component={DetailsScreen}/>
        </NotificationsStack.Navigator>
    )
}

export default NotificationsStackScreen;
    