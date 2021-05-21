import React from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import styles from '../style/screen'
import DateTimePicker from "react-native-modal-datetime-picker";
import { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

class DateTime extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false,
            chosenDate: moment(new Date().toLocaleString()).format('YYYY-MM-DD HH:mm'),
            date: moment(new Date().toLocaleString()).format('YYYY-MM-DD'),
            time: moment(new Date().toLocaleString()).format('HH:mm')
        }
    }

    handlePicker =  () => {
        this.setState({
            isVisible : false
        })
    }

    showPicker =  (datetime) => {
        this.setState({
            isVisible : true,
            chosenDate: moment(datetime).format('YYYY-MM-DD HH:mm'),
            date: moment(datetime).format('YYYY-MM-DD'),
            time: moment(datetime).format('HH:mm')
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
                <View style={styles.dateRow}>
                    <Text style={styles.titleRow}>Time:</Text>
                    <Text style={styles.dateLightMode}>{this.state.date}</Text>
                </View>
                
                <View style={styles.timeRow}>
                    <Text style={styles.timeLightMode}>
                        {this.state.time}
                    </Text>
                </View>
                
                <TouchableOpacity onPress = {this.showPicker}>
                    <Text>Set Time</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode = {'datetime'}
                    is24Hour = {true}
                />

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelLightModeButton}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.saveLightModeButton}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function LightModeSetting({route, navigation}) {
    const {item} = route.params;
    return (
        <View style={styles.containerLightMode}>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Name:</Text>
                <Text style={styles.nameMode}>{item.name}</Text>
            </View>
            <View style={styles.dividingLine}></View>
            <View style={styles.rowLightMode}>
                <Text style={styles.titleRow}>Status:</Text>
                <Text style={item.state == "1" ? styles.stateModeOn : styles.stateModeOff}>{item.state == "1" ? "On" : "Off"}</Text>
            </View>
            <View style={styles.dividingLine}></View>
            
            <View style={styles.timeLightModeSetting}>
                <DateTime></DateTime>
            </View>
        
        </View>
    )
}

export default LightModeSetting;