import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, FlatList, Switch} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LightData from '../data/LightData';
import RoomsData from '../data/RoomsData';
import { ScrollView } from 'react-native-gesture-handler';

function RoomName(){
    roomName = [];
    RoomsData.forEach(item => {
        roomName[item.key] = item.name;
    });
    return roomName;
}

var roomName = RoomName();

function filter(data, id) {
    if(id === "0")
        return data;
    return data.filter(item => item.room === id);
}

var data = [];
var countLeft = 0;

class LightList extends Component {
    constructor() {
        super();
        this.state = {
            listLights : data
        }
    }


    setLightState = (value, index) => {
        const tempData = _.cloneDeep(this.state.listLights);
        tempData[index].state = value ? "1" : "0";
        this.setState({listLights: tempData});
    }

    lightItemLeft = ({item, index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setLightState(value,index)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )
    
    lightItemRight = ({item, index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state === "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setLightState(value, index + countLeft)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )

    render() {
        var data=this.state.listLights;
        var right = Math.floor(data.length/2);
        var left = data.length - right;
        var dataLeft = data.slice(0,left);
        var dataRight = data.slice(left,data.length);

        return (
            <View style = {styles.container}>
                <View style={styles.containerLight}>
                    <View style={styles.lightCardCol}>
                        <FlatList
                            data={dataLeft}
                            renderItem={this.lightItemLeft}
                        />
                    </View>
                    <View style={styles.lightCardCol}>
                        <FlatList
                            data={dataRight}
                            renderItem={this.lightItemRight}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


class LightGeneral extends Component{
    constructor(){
        super();
        this.state = {
            data: data
        }
    }
    //const [listLight, setListLight] = React.useState(filter(LightData,itemChoose));

    setLightState = (value, index, idRoom) => {
        const tempData = _.cloneDeep(this.state.data);
        tempData[idRoom - 1][index].state = value ? "1" : "0";
        this.setState({data: tempData});
    }

    LightItem = ({item,index}) => (
        <View style={styles.lightCard}>
            
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state == "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setLightState(value, index, item.room)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )
    LightGeneralItem = ({item, index}) => (
        <View style={styles.lightSystemMode}>
            
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>{roomName[index + 1]}</Text>
            </View>
            <ScrollView>
                <FlatList
                    data ={item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={this.LightItem}>
                </FlatList>
            </ScrollView>
        </View>
    )
    render(){
        return(
            <View>
                <FlatList
                    data = {this.state.data}
                    renderItem={this.LightGeneralItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

function groupByKey(array, key) {
    return array
        .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash; 
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
        }, {})
}

function grouping(data){
    return groupByKey(data, 'room')
}

function convertObjectToArray(obj){
    var entries = Object.entries(obj);
    var arr = [];
    entries.forEach(([key, value]) => {
        arr[key] = value;
    })
    arr.shift();
    return arr;
}

function LightScreen({route}) {
    const {name, id} = route.params;
    if(id=="0"){
        data = grouping(LightData);

        data = convertObjectToArray(data);
        return(
            <LightGeneral/>
            // <Text>Hello</Text>
        )
        
    }
    else{
        data = filter(LightData, id);
        countLeft = Math.ceil(data.length/2);
        return (
            <LightList/>
        );
    }
}

export default LightScreen;

