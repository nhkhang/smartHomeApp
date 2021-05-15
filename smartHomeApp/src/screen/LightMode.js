import React, {Component} from 'react';
import {ScrollView, View, Text, FlatList, TouchableOpacity } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen';
import NotificationData from '../data/NotificationData';

class FlatListLightMode extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.notificationCard} onPress={()=> navigation.navigate("Details", {screen: "Notification"})}>
                    <View style={styles.titleNoti}>
                        <Text style={this.props.item.type == "Warning" ? styles.warningNoti : (this.props.item.type == "Setting" ? styles.settingNoti : styles.alertNoti)}>{this.props.item.type}</Text>
                        <Text style={styles.timeNoti}>{this.props.item.time}</Text>
                    </View>                  
                    <Text style={styles.contentNoti}>{this.props.item.content}</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}

function LightModesScreen({navigation}) {
    return (
        <View style={styles.headerlightMode}>
            <FlatList data={NotificationData}
            renderItem={({item, index})=>{
                // console.log(`Item = ${item}, index = ${index}`);
                return(
                    
                    <FlatListLightMode item={item} index={index}>
                    </FlatListLightMode>
                );
            }}>

            </FlatList>
        </View>
    );
}

const LightModesStack = createStackNavigator();

function LightModeStackScreen() {
    return (
        <LightModesStack.Navigator>
            <LightModesStack.Screen
                name="Light Mode"
                component={LightModesScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <LightModesStack.Screen name="Details" component={DetailsScreen}/>
        </LightModesStack.Navigator>
    )
}

export default LightModeStackScreen;
    