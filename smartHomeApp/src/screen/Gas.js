import React, {Component, useEffect} from 'react';
import _ from "lodash";
import { View, Text, Switch, FlatList, TouchableOpacity, Image} from "react-native";
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import getData from '../data/getData';

var data = [];

class GasList extends Component {
    constructor(props) {
        super();
        this.state = {
            listRooms : data
        } 
    }
    
    async loadData(){
        getData("gas").then((res) => {
            if (res != this.state.listRooms){
                this.setState({listRooms: res});
            }
        });
    }

    async componentDidMount(){
        this.loadData();
        setInterval(() => {
            this.loadData();
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

var reload = false;

function GasScreen({route, navigation}){
    // useEffect(() => {
    //     navigation.push("Gas");
    // }, [reload]);

    return (
        <GasList/>
    );
}

export default GasScreen;