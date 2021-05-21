import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import DoorData from '../data/DoorData';


function filter(data, id) {
    if(id === "0")
        return data;
    return data.filter(item => item.room === id);
}

var data = [];

class DoorList extends Component {
    constructor() {
        super();
        this.state = {
            listDoors : data
        } 
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
                    <Text style={styles.doorState}>{item.state === "1" ? "Locked" : "Not Locked"}</Text>
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
    const id = route.params.id;
    data = filter(DoorData, id);
    return (
        <DoorList/>
    );
}

export default DoorScreen;