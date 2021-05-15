import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, FlatList, Switch} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LightData from '../data/LightData';


function filter(data, id) {
    if(id === "0")
        return data;
    return data.filter(item => item.room === id);
}

var data = [];

class LightList extends Component {
    constructor() {
        super();
        this.state = {
            listLights : data
        } 
    }


    setDoorState = (value, index) => {
        const tempData = _.cloneDeep(this.state.listLights);
        tempData[index].state = value ? "1" : "0";
        this.setState({listLights: tempData});
    }

    lightItem = ({item, index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setDoorState(value,index)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data={this.state.listLights}
                    renderItem={this.lightItem}
                />
            </View>
        )
    }
}

function LightScreen({route}) {
    const {name, id} = route.params;
    data = filter(LightData, id);
    return (
        <LightList/>
    );
}

export default LightScreen;

