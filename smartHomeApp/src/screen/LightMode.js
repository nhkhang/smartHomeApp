import React, {Component} from 'react';
import {ScrollView, View, Text, FlatList, TouchableOpacity, Alert, Switch} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNPickerSelect from "react-native-picker-select";
import { createStackNavigator} from '@react-navigation/stack'
import styles from '../style/screen';
import LightModeData from '../data/LightModeData';
import Mode from './Mode';
import LightModeSetting from './LightModeSetting';


function convertToDisplay(data){
    var res = []
    data.forEach(item => {
        res.push({
            label: item.name,
            value: item.key,
        })
    });
    return res;
}


class LighModeItem extends Component {

    setLightState = (value, index) => {

    }

    createButtonDeleteMode = () =>
        Alert.alert(
            "Notification",
            "Do you want to delete " + this.props.item.name + " ?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Remove",
                    onPress: ()=> {console.log("Removed " + this.props.item.key)}
                }
            ]
        );   

    render() {
        return (
            <View style={styles.modeView}>
                <View style={styles.LeftLightModeItem}>
                    <View style={styles.TopLeftLightModeItem}>
                        <Text style={styles.nameModeItem}>{this.props.item.name}</Text>
                    </View>
                    <View style={styles.BotLeftLightModeItem}>
                        <TouchableOpacity style={styles.deleteModeButton} onPress={this.createButtonDeleteMode}>
                            <Ionicons name="trash-outline" size={24}/>
                        </TouchableOpacity>
                    </View>        
                </View>
                <View style={styles.CenterLightModeItem}>
                    <Text style={styles.timeMode}>Light: Light {this.props.item.LightId}</Text>
                    <Text style={styles.timeMode}>Light State: {this.props.item.lightState == "1"?"Yes" :"No"}</Text>
                    <Text style={styles.timeMode}>ActivatedAt: {this.props.item.ActivatedAt}</Text>
                    <Text style={styles.timeMode}>DeactivatedAt: {this.props.item.DeactivatedAt}</Text>
                </View>
                <View style={styles.RightLightModeItem}>
                    <View style={styles.TopRightLightModeItem}>
                        <Switch
                            value={this.props.item.state === "1" ? true : false}
                            style={styles.toggleLight}
                            onValueChange={(value) => this.setLightState(value,this.props.index)}
                        />
                    </View>
                    <View style={styles.BotRightLightModeItem}>
                        <TouchableOpacity style={styles.editModeButton} onPress={() => this.props.navigation.navigate("Light Mode Setting", {item: this.props.item})}>
                            <Ionicons name="create-outline" size={24}/>
                        </TouchableOpacity>
                    </View>            
                </View>             
            </View>
        ); 
    }
}

function LightModesScreen({navigation}) {

    const [itemChoose, setItemChoose] = React.useState("1");
    

    return (
        <View style={styles.container}>
            <View style={styles.modeList}>
                <FlatList data={LightModeData}
                    renderItem={({item, index})=>{
                        // console.log(`Item = ${item}, index = ${index}`);
                        return(
                            
                            <LighModeItem item={item} index={index} itemChoose={itemChoose} navigation={navigation}>
                            </LighModeItem>
                        );
                    }}>
                </FlatList>
            </View>
            <View style={styles.footerLightMode}>
                <View style={styles.dividingLine}></View>
                <View style={styles.createModeButtonContainer}>
                    <TouchableOpacity style={styles.createModeButton} onPress={() => navigation.navigate("Mode")}>
                        <Text>Create new mode </Text>
                        <Ionicons name="add-circle-outline" size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
            
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
            <LightModesStack.Screen name="Mode" component={Mode}/>
            <LightModesStack.Screen name="Light Mode Setting" component={LightModeSetting}/>
        </LightModesStack.Navigator>
    )
}

export default LightModeStackScreen;
    