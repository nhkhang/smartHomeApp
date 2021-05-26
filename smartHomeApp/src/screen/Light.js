import React, {Component} from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, FlatList, Switch} from "react-native";
import styles from '../style/screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LightData from '../data/LightData';
import RoomsData from '../data/RoomsData'

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
var groups;

class LightGeneral extends Component{
    constructor(){
        super();
        this.state = {
            data: groups
        }
    }
    //const [listLight, setListLight] = React.useState(filter(LightData,itemChoose));

    const setLightState = (value, index) => {
        const tempData = _.cloneDeep(listLight);
        tempData[index].state = value ? "1" : "0";
        setListLight(tempData);
    }

    const LightItem = ({item,index}) => (
        <View style={styles.lightCard}>
            <View style={styles.lightItem}>
                <View style={styles.headerLightItem}>
                    <Text style={styles.nameLight}>{item.name}</Text>
                    <Switch
                        value={item.state == "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => setLightState(value,index)}
                    />
                </View>
                <View style={styles.bodyLightItem}>
                    <MaterialCommunityIcons style={item.state == "1"?styles.lightOn:styles.lightOff} name={item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                </View>
            </View>
        </View>
    )
    lightGeneralItem = ({name, list}) =>(
        <View style={styles.rowLightMode}>
            <Text style={styles.titleRow}>name</Text>
        </View>
        <View style={styles.lightSystemMode}>
            <ScrollView>
                <FlatList
                    data ={list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item,index}) => (
                        <LightItem item={item} index={index}/>
                    )}>
                </FlatList>
            </ScrollView>
        </View>
    )
    render(){
        var data = this.state.data;

        Object.keys(data).forEach(key =>{
            let value = data[key];
            console.log(`${key}: ${value}`);
        })
        return(
            <Text>Light General</Text>
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

function LightScreen({route}) {
    const {name, id} = route.params;
    if(id==0){
        groups = grouping(LightData);
        console.log(groups);
        return(
            <LightGeneral/>
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

