import React from 'react';
import { View, Text, Button, Touchable, TouchableOpacity, Image } from "react-native";
import styles from '../style/screen'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function RoomDetail({navigation}){
    return (
        <View style={styles.containerView}>
            <View style={styles.roomDetailSceenImage}>
                <Image
                    source = {{uri:"https://c1.staticflickr.com/9/8725/28609601352_59ebbba9b5_o.png"}}
                    style={styles.roomDetailSceenImage}>
                </Image>
            </View>

            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("ElementDetail", {screen:"Door"})}>
                    <FontAwesome5Pro name={'door-open'} size={30} />
                    <Text>1 Locked </Text>
                    <Text>0 Unclocked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("ElementDetail", {screen:"Window"})}>
                    <MaterialCommunityIcons name="window-closed-variant" size={30} />
                    <Text>1 Locked </Text>
                    <Text>0 Unclocked</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("ElementDetail", {screen:"Temperature"})}>
                    <FontAwesome5Pro name={'temperature-low'} size={30} />
                    <Text>27℃</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("ElementDetail", {screen:"Light"})}>
                    <MaterialCommunityIcons name="lightbulb-on" size={30} />
                    <Text>1 On - 1 Off</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.roomDetailBtnLeft} onPress={()=>navigation.navigate("ElementDetail", {screen:"Gas"})}>
                    <MaterialCommunityIcons name="gas-cylinder" size={30} />
                    <Text>Low</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomDetailBtnRight} onPress={()=>navigation.navigate("ElementDetail", {screen:"Water"})}>
                    <MaterialCommunityIcons name="water-percent" size={30} />
                    <Text>50%</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default RoomDetail;