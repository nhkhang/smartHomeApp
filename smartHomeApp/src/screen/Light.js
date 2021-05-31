import React, {Component, useEffect} from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, FlatList, Switch} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import getData from '../data/getData';
import LightData from '../data/LightData';
import {mqtt} from "../mqtt/MQTT";

function filter(data, id) {
    if(id === "0")
        return data;
    return data.filter(item => item.room === id);
}

var data = [];
var countLeft = 0;
class LightList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLights: [],
            id: props.id,
            isLoading: true
        }
        console.log("Init");
    }

    async componentDidMount() {
        getData("relay").then(res => {
            this.setState({
                listLights: res,
                isLoading: false
            });
        });
    }

    setLightState = (value, index) => {
        const tempData = _.cloneDeep(this.state.listLights);
        tempData[index].state = value ? "1" : "0";
        mqtt.changeLight(index, tempData[index].state);
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
        console.log(`load? ${this.state.isLoading}`);
        if (this.state.isLoading == true) {
            return <View><Text>Loading...</Text></View>;
        } else {
            var data= this.state.listLights;
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
}

function LightScreen({route}) {
    const {name, id} = route.params;
    return (
        <LightList id={id}/>
    );
}

export default LightScreen;

