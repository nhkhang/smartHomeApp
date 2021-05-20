import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';

var data = [];


class TemparatureList extends Component {
    constructor() {
        super();
        this.state = {
            listRooms : data
        } 
    }

    temparatureListItem = ({item, index}) => (
        <Text>Window Item</Text>
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
    data = RoomsData;
    return (
        <TemparatureList/>
    );
}

export default TemparatureScreen;