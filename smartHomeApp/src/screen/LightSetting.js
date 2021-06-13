import React from 'react';
import _ from "lodash";
import { View, Text, TouchableOpacity, ScrollView, Switch, Image } from "react-native";
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



class LightSetting extends Component {
    constructor(props) {
        super();
        this.state = {
            itemChoose: props.route.params.item,
            listLight: filter(LightData, props.route.params.item),
            settingState: "0"
        }
    }

    render() {
        console.log(getRoomName(this.state.itemChoose));
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
                    <Text style={styles.nameMode}>{this.props.route.params.lightName}</Text>
                </View>
                
                <View style={styles.dividingLine}></View>
                
                <View style={styles.rowLightMode}>
                    <Text style={styles.titleRow}>Room:</Text>
                    <Text style={styles.nameMode}>{getRoomName(this.state.itemChoose)}</Text>
                    {/* <View style={styles.selectRoomMode}>
                        <RNPickerSelect
                            value = {this.state.itemChoose}
                            onValueChange={(value) =>{
                                // setItemChoose(value);
                                this.setState({itemChoose: value, listLight : filter(LightData, this.state.itemChoose)});
                            }}
                            items={convertToDisplay(RoomsData)}
                            pickerProps={{style: styles.pickerProps}}
                        />
                        
                    </View> */}
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
                    <TouchableOpacity style ={styles.lightModeButton} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.saveLightModeText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LightSetting;