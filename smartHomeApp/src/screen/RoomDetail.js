import React from 'react';
import { View, Text, Button, Touchable, TouchableOpacity, Image } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function RoomDetailsScreen({navigation}){
    return (
        <View style={styles.containerView}>
            <View style={styles.roomDetailSceenImage}>
                <Image
                    source = {{uri:"https://c1.staticflickr.com/9/8725/28609601352_59ebbba9b5_o.png"}}
                    style={styles.roomDetailSceenImage}>
                </Image>
            </View>

            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft}>
                    <FontAwesome5Pro name={'door-open'} size={30} />
                    <Text>1 Locked </Text>
                    <Text>0 Unclocked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight}>
                    <MaterialCommunityIcons name="window-closed-variant" size={30} />
                    <Text>1 Locked </Text>
                    <Text>0 Unclocked</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft}>
                    <FontAwesome5Pro name={'temperature-low'} size={30} />
                    <Text>27℃</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight}>
                    <MaterialCommunityIcons name="lightbulb-on" size={30} />
                    <Text>1 On - 1 Off</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft}>
                    <MaterialCommunityIcons name="gas-cylinder" size={30} />
                    <Text>Low</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight}>
                    <MaterialCommunityIcons name="water-percent" size={30} />
                    <Text>50%</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const RoomDetailsStack = createStackNavigator();

function RoomDetailsStackScreen() {
    return (
        <RoomDetailsStack.Navigator>
            <RoomDetailsStack.Screen name="Room Name" component={RoomDetailsScreen}/>
            <RoomDetailsStack.Screen name="Details" component={DetailsScreen}/>
        </RoomDetailsStack.Navigator>
    )
}

export default RoomDetailsStackScreen;