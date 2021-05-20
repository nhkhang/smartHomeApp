import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';

var data = [];


class GasList extends Component {
    constructor() {
        super();
        this.state = {
            listRooms : data
        } 
    }

    gasItem = ({item, index}) => (
        <Text>Window Item</Text>
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





function GasScreen({route}) {
    data = RoomsData;
    return (
        <GasList/>
    );
}

export default GasScreen;