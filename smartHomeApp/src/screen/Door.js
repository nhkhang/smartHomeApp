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
        tempData[index].state = value;
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
                    <Text style={styles.doorState}></Text>
                    <Switch
                        value={item.state}
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



// class FlatListItem extends Component {
//     render() {
//         return (
//             <View style={styles.DoorScreen}>
//                 <TouchableOpacity style={styles.doorItem}>
//                     <Image
//                         source = {{uri: this.props.item.url}}
//                         style={styles.doorImage}>
//                     </Image>

//                     <View style={styles.doorText}>
//                         <Text style={styles.doorName}>{this.props.item.name}</Text>
//                         <Text style={styles.doorState}></Text>
//                         <Switch
//                             value={true}
//                             style={styles.toggleDoor}
//                         />
//                     </View>
//                 </TouchableOpacity>
//             </View>  
//         )
//     }
// }


function DoorScreen({route}) {

    return (
        <DoorList/>
    );
}

export default DoorScreen;