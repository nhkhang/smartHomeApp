import React, {Component, useEffect} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import getData from '../data/getData';

var data = [];

class GasList extends Component {
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

    gasItem = ({item, index}) => (
        <View style={styles.DoorScreen}>
            <View style={styles.doorItem}>
                <Image
                    source = {{uri: item.url}}
                    style={styles.doorImage}>
                </Image>

                <View style={styles.doorText}>
                    <Text style={styles.doorName}>{item.name}</Text>
                    <Text style={styles.doorState}>{item.gasConcentration}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listRooms}
                    renderItem={this.gasItem}
                />
            </View>
        )
    }
}

function GasScreen({route, navigation}){
    return (
        <GasList/>
    );
}

export default GasScreen;