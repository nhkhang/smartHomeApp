import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, FlatList, Switch} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import getData from '../data/getData';
import LightData from '../data/LightData';
import {mqtt} from "../mqtt/MQTT";
import AsyncStorage from '@react-native-community/async-storage';


function filter(data, id) {
    if(id === "0")
        return data;
    return data.filter(item => item.room === id);
}

var data = [];
var countLeft = 0;


class LightList extends Component {
    constructor() {
        super();
        this.state = {
            listLights: data,
            countLeft: 0
        }
    }


    setLightState = (value, index) => {
        const tempData = _.cloneDeep(this.state.listLights);
        tempData[index].state = value ? "1" : "0";
        this.setState({listLights: tempData});
    }

    lightItemLeft = ({item, index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setLightState(value,index)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )
    
    lightItemRight = ({item, index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setLightState(value, index + countLeft)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )

    render() {
        var data = this.state.listLights;
        console.log(data);
        var right = Math.floor(data.length/2);
        var left = data.length - right;
        var dataLeft = data.slice(0,left);
        var dataRight = data.slice(left,data.length);
        return (
            <View style = {styles.container}>
                <View style={styles.containerLight}>
                    <View style={styles.lightCardCol}>
                        <FlatList
                            data={dataLeft}
                            renderItem={this.lightItemLeft}
                        />
                    </View>
                    <View style={styles.lightCardCol}>
                        <FlatList
                            data={dataRight}
                            renderItem={this.lightItemRight}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

async function LightScreen({route}) {
    const {name, id} = route.params;
    AsyncStorage.getItem('relay', (e, value) => {
        data = filter(value, id);
        countLeft = Math.ceil(data.length/2);
        return (
            <LightList/>
        );
    })
}

export default LightScreen;

