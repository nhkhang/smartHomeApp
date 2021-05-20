import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';

var data = [];


class HumidityList extends Component {
    constructor() {
        super();
        this.state = {
            listRooms : data
        } 
    }

    humidityItem = ({item, index}) => (
        <Text>Window Item</Text>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listRooms}
                    renderItem={this.humidityItem}
                />
            </View>
        )
    }
}





function HumidityScreen({route}) {
    data = RoomsData;
    return (
        <HumidityList/>
    );
}

export default HumidityScreen;