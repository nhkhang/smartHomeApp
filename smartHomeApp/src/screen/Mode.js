import React from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from "react-native-picker-select";
import { createStackNavigator} from '@react-navigation/stack'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import LightData from '../data/LightData';

function convertToDisplay(data){
    var res = []
    res.push({
        label: "All room",
        value: "0",
    });
    data.forEach(item => {
        res.push({
            label: item.name,
            value: item.key,
        })
    });

    return res;
}

function convertToDisplay_Light(data){
    var res = []
    res.push({
        label: "Select light",
        value: "0",
    });
    data.forEach(item => {
        res.push({
            label: item.name,
            value: item.key,
        })
    });

    return res;
}

function getRoomName(id){
    var name = "";
    RoomsData.forEach(item => {
        if(item.key == id){
            name = item.name;
        }
    });
    return name;
}

function filter(data, id) {
    if(id==0) return data;
    return data.filter(item => item.room === id);
}

function getLight(data, id){
    console.log(id);
    console.log(data)
    if(id==0) return data;
    return data.filter(item => item.key === id);
}

const storeData = async (key, val) => {
    try {
        await AsyncStorage.setItem(key, val);
        console.log(`Storage store ${key} -`, val);
    } catch (error) {
        console.error(`Can't store data with key '${key}' and val '${val}: ${error}`);
    }
};

const retrieveData = async (key) => {
    try {
        var value = await AsyncStorage.getItem(key);
        console.log(`Retrieve from ` + key);
        return value;
    } catch (error) {
        // Error retrieving data
        console.error(`Can't get data with key '${key}': ${error}`);
        return null;
    }
}

const saveLightSetting = async (lightId, lightState) => {
    var now = moment(new Date(), 'HH:mm');
    var start = await retrieveData(`light${lightId}_start`).then((value) => {
        return moment(value, 'HH:mm');
    });
    var end = await retrieveData(`light${lightId}_end`).then((value) => {
        return moment(value, 'HH:mm');
    });
    if (now.isAfter(start)){
        start = now;
    }
    var start_delay = start.diff(now);
    setTimeout(() => {
        var end_delay = end.diff(start);
        setTimeout(() => {
            var lightState = (lightState == "1") ? "0" : "1";
            mqtt.changeLight(lightId, lightState);
        }, end_delay);
        mqtt.changeLight(lightId, lightState);
    }, start_delay);
}

class ActivatedAt extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false,
            chosenDate: moment(new Date()).format('HH:mm'),
        }
    }

    handlePicker =  (datetime) => {
        this.setState({
            isVisible : false,
            chosenDate: moment(datetime).format('HH:mm'),
        }, () => {
            var key = `light${this.props.id}_start`;
            storeData(key, this.state.chosenDate);
        })
    }

    showPicker =  () => {
        this.setState({
            isVisible : true,
        })
    }

    hidePicker =  () => {
        this.setState({
            isVisible : false
        })
    }

    render(){
        return (
            <View>               
                <View>
                    <TouchableOpacity onPress = {this.showPicker}>
                        <View style={styles.timeButtonMode}>
                            <Text>
                                {this.state.chosenDate}
                            </Text>
                            <MaterialCommunityIcons name="clock-outline" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode = {'time'}
                    is24Hour = {true}
                />
             
            </View>
        );
    }
}

class DeactivatedAt extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false,
            chosenDate: moment(new Date()).format('HH:mm'),
        }
    }
    handlePicker =  (datetime) => {
        this.setState({
            isVisible : false,
            chosenDate: moment(datetime).format('HH:mm'),
        }, () => {
            var key = `light${this.props.id}_end`;
            storeData(key, this.state.chosenDate);
        })
    }

    showPicker =  () => {
        this.setState({
            isVisible : true,
        })
    }

    hidePicker =  () => {
        this.setState({
            isVisible : false
        })
    }

    render(){
        return (
            <View>               
                <View>
                    <TouchableOpacity onPress = {this.showPicker}>
                        <View style={styles.timeButtonMode}>
                            <Text>
                                {this.state.chosenDate}
                            </Text>
                            <MaterialCommunityIcons name="clock-outline" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode = {'time'}
                    is24Hour = {true}
                />
             
            </View>
        );
    }
}

function Mode({route, navigation}) {

    const [itemChoose, setItemChoose] = React.useState("0");

    const [listLight, setListLight] = React.useState(filter(LightData,itemChoose));

    const [lightChoose, setLightChoose] = React.useState("0");
    
    const [listlightItem, setlightItem] = React.useState(getLight(listLight, lightChoose));
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



    return (
        <View style={styles.containerMode}>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Name:</Text>
                <TextInput
                    style={styles.nameMode}
                    placeholder="Name Mode"
                />
            </View>
            
            <View style={styles.dividingLine}></View>
            
            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Room:</Text>
                <View style={styles.selectRoomMode}>
                    <RNPickerSelect
                        value = {itemChoose}
                        onValueChange={(value) =>{
                            setItemChoose(value);
                            setListLight(filter(LightData, itemChoose));
                        }}
                        items={convertToDisplay(RoomsData)}
                        pickerProps={{style: styles.pickerProps}}
                    />
                </View>
            </View>
            
            <View style={styles.dividingLine}></View>
            
            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Light:</Text>
                <View style={styles.selectRoomMode}>
                    <RNPickerSelect
                        value = {lightChoose}
                        onValueChange={(value) =>{
                            setLightChoose(value);
                            setlightItem(getLight(listLight, lightChoose));
                        }}
                        items={convertToDisplay_Light(listLight)}
                        pickerProps={{style: styles.pickerProps}}
                    />
                </View>
            </View>
            <View style={styles.dividingLine}></View>

            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Activated at:</Text>
                <View>
                    <ActivatedAt></ActivatedAt>
                </View>
            </View>

            <View style={styles.dividingLine}></View>

            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Deactivated at:</Text>
                <View>
                    <DeactivatedAt></DeactivatedAt>
                </View>
            </View>

            <View style={styles.dividingLine}></View>
            
            <View>
                <View style={styles.rowLightMode}>
                    <Text style={styles.titleRow}>Light system:</Text>
                </View>
                
                <View style={styles.lightSystemMode}>
                    <ScrollView>
                        <FlatList
                            data ={listlightItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item,index}) => (
                                <LightItem item={item} index={index}/>
                            )}>
                        </FlatList>
                    </ScrollView>
                </View>

            </View>
            
            <View style={styles.dividingLine}></View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style ={styles.lightModeButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelLightModeText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.lightModeButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.saveLightModeText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Mode;