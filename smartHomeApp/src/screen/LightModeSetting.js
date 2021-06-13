import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import styles from '../style/screen'
import DateTimePicker from "react-native-modal-datetime-picker";
import { Component } from 'react';
import moment from 'moment';
import RoomsData from '../data/RoomsData'

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

function LightModeSetting({route, navigation}) {
    const {item} = route.params;
    return (
        <View style={styles.containerMode}>
            <View style={styles.roomDetailSceenImage}>
                <Image
                    source = {{uri:"https://c1.staticflickr.com/9/8725/28609601352_59ebbba9b5_o.png"}}
                    style={styles.roomDetailSceenImage}>
                </Image>
            </View>

            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Name:</Text>
                <TextInput
                    style={styles.nameMode}
                    placeholder={item.name}
                />
            </View>

            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Light:</Text>
                <Text style={styles.nameMode}>Light {item.lightId}</Text>
            </View>
                
            <View style={styles.dividingLine}></View>
                
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Room:</Text>
                <Text style={styles.nameMode}>{getRoomName(item.lightId)}</Text>
            </View>
    
            <View style={styles.dividingLine}></View>

            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Activated at:</Text>
                <View>
                    <ActivatedAt id={item.ActivatedAt}></ActivatedAt>
                </View>
            </View>
    
            <View style={styles.dividingLine}></View>
    
            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Deactivated at:</Text>
                <View>
                    <DeactivatedAt id={item.DeactivatedAt}></DeactivatedAt>
                </View>
            </View>

            <View style={styles.dividingLine}></View>
            
            <View style={styles.rowMode}>
                <Text style={styles.titleRow}>Setting Status:</Text>              
                <View>
                    <Switch
                        value={this.state.settingState == "1" ? true : false}
                        style={styles.toggleLight}
                        onValueChange={(value) => this.setState({settingState : value})}
                    />
                </View>  
            </View>
            
            <View style={styles.dividingLine}></View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style ={styles.lightModeButton} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.cancelLightModeText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.lightModeButton} onPress={() => saveLightSetting(this.props.route.params.lightId, this.state.settingState)}>
                    <Text style={styles.saveLightModeText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LightModeSetting;