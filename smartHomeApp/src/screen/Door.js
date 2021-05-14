import React, {Component, useState} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import DoorData from '../data/DoorData';


class DoorList extends Component {
    constructor() {
        super();
        this.state = {
            listDoors : DoorData
        } 
    }
    setDoorState = (value, index) => {
        const tempData = _.cloneDeep(this.state.listDoors);
        tempData[index].state = value ? "1" : "0";
        this.setState({listDoors: tempData});
    }

    doorItem = ({item, index}) => (
        <View style={styles.DoorScreen}>
            <View style={styles.doorItem}>
                <Image
                    source = {{uri: item.url}}
                    style={styles.doorImage}>
                </Image>

                <View style={styles.doorText}>
                    <Text style={styles.doorName}>{item.name}</Text>
                    <Text style={styles.doorState}>{item.state === "1" ? "Locked" : "No Locked"}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleDoor}
                        onValueChange={(value) => this.setDoorState(value,index)}
                    />
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listDoors}
                    renderItem={this.doorItem}
                />
            </View>
        )
    }
}





function DoorScreen({route}) {

    return (
        <DoorList/>
    );
}

export default DoorScreen;