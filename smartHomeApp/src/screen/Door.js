import React, {Component, useState} from 'react';
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import DoorData from '../data/DoorData';

class FlatListItem extends Component {

    

    render() {
        return (
            <View style={styles.DoorScreen}>
                <TouchableOpacity style={styles.doorItem}>
                    <Image
                        source = {{uri: this.props.item.url}}
                        style={styles.doorImage}>
                    </Image>

                    <View style={styles.doorText}>
                        <Text style={styles.doorName}>{this.props.item.name}</Text>
                        <Text style={styles.doorState}></Text>
                        <Switch
                            value={true}
                            style={styles.toggleDoor}
                        />
                    </View>
                </TouchableOpacity>
            </View>  
        )
    }
}


function DoorScreen({route}) {

    return (
        <View>
            <FlatList data={DoorData}
            renderItem={({item, index})=>{
                // console.log(`Item = ${item}, index = ${index}`);
                return(
                    <FlatListItem item={item} index={index}>
                    </FlatListItem>
                );
            }}>

            </FlatList>
        </View>
    );
}

export default DoorScreen;