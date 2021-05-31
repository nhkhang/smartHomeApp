import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, Button, Touchable, TouchableOpacity, Image } from "react-native";
import styles from '../style/screen'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Door from './Door';
import Light from './Light';
import Temperature from './Temperature';
import Gas from './Gas';
import Humidity from './Humidity';
import Window from './Window';


function RoomDetail({route, navigation}){
    const {name, id} = route.params;
    return (
        <View style = {styles.container}>
            <View style={styles.containerRoomDetail}>
                <View style={styles.roomDetailSceenImage}>
                    <Image
                        source = {{uri:"https://c1.staticflickr.com/9/8725/28609601352_59ebbba9b5_o.png"}}
                        style={styles.roomDetailSceenImage}>
                    </Image>
                </View>

                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("Door", {name: name, id: id})}>
                        <FontAwesome5Pro name={'door-open'} size={30} />
                        <Text>1 Locked </Text>
                        <Text>0 Unclocked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("Window", {name: name, id: id})}>
                        <MaterialCommunityIcons name="window-closed-variant" size={30} />
                        <Text>1 Locked </Text>
                        <Text>0 Unclocked</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("Temperature", {name:"Temperature " + name, id: id})}>
                        <FontAwesome5Pro name={'temperature-low'} size={30} />
                        <Text>27℃</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("Light", {name: name, id: id})}>
                        <MaterialCommunityIcons name="lightbulb-on" size={30} />
                        <Text>1 On - 1 Off</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("Gas", {name:"Gas " + name, id: id})}>
                        <MaterialCommunityIcons name="gas-cylinder" size={30} />
                        <Text>Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("Humidity", {name:"Water " + name, id: id})}>
                        <MaterialCommunityIcons name="water-percent" size={30} />
                        <Text>50%</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}

const RoomDetailStack = createStackNavigator();

function RoomDetailStackScreen({route, navigation}) {
    const {name, id} = route.params;
    return (
        <RoomDetailStack.Navigator>
            <RoomDetailStack.Screen
                name="RoomDetail"
                component={RoomDetail}
                initialParams={{
                    name: name,
                    id: id,
                }}
                options={{
                    title: name,
                }}
            />
            <RoomDetailStack.Screen name="Door" component={Door}/>
            <RoomDetailStack.Screen name="Light" component={Light}/>
            <RoomDetailStack.Screen name="Gas" component={Gas}/>
            <RoomDetailStack.Screen name="Temperature" component={Temperature}/>
            <RoomDetailStack.Screen name="Humidity" component={Humidity}/>
            <RoomDetailStack.Screen name="Window" component={Window}/>

        </RoomDetailStack.Navigator>
    )
}


export default RoomDetailStackScreen;