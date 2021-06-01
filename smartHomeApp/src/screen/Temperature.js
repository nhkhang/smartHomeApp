import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import getData from '../data/getData';
var data = [];


class TemparatureList extends Component {
    constructor() {
        super();
        this.state = {
            listRooms : data
        } 
    }

    async componentDidMount(){
        setInterval(() => {
            getData("room").then((res) => {
                if (res != this.state.listRooms){
                    this.setState({listRooms: res});
                }
            });
        }, 1000);
    }

    temparatureListItem = ({item, index}) => (
        <View style={styles.DoorScreen}>
            <View style={styles.doorItem}>
                <Image
                    source = {{uri: item.url}}
                    style={styles.doorImage}>
                </Image>

                <View style={styles.doorText}>
                    <Text style={styles.doorName}>{item.name}</Text>
                    <Text style={styles.doorState}>{item.temperature}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listRooms}
                    renderItem={this.temparatureListItem}
                />
            </View>
        )
    }
}





function TemparatureScreen({route}) {
    return (
        <TemparatureList/>
    );
}

export default TemparatureScreen;