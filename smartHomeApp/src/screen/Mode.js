import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from "react-native-picker-select";
import { createStackNavigator} from '@react-navigation/stack'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'react-moment';
import moment from 'moment';
import LightData from '../data/LightData';

function convertToDisplay(data){
    var res = []
    data.forEach(item => {
        res.push({
            label: item.name,
            value: item.key,
        })
    });
    return res;
}

function filter(data, id) {
    return data.filter(item => item.room === id);
}

class ActivatedAt extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false,
            chosenDate: moment(new Date().toLocaleString()).format('YYYY-MM-DD HH:mm'),
        }
    }

    handlePicker =  (datetime) => {
        this.setState({
            isVisible : false,
            chosenDate: moment(datetime).format('YYYY-MM-DD HH:mm'),
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
                    mode = {'datetime'}
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
            chosenDate: moment(new Date().toLocaleString()).format('YYYY-MM-DD HH:mm'),
        }
    }

    handlePicker =  (datetime) => {
        this.setState({
            isVisible : false,
            chosenDate: moment(datetime).format('YYYY-MM-DD HH:mm'),
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
                    mode = {'datetime'}
                    is24Hour = {true}
                />
             
            </View>
        );
    }
}

class LightItem extends Component{

    render(){
        return(
            <View style={styles.lightCard}>
                <View style={styles.lightItem}>
                    <View style={styles.headerLightItem}>
                        <Text style={styles.nameLight}>{this.props.item.name}</Text>
                        <Switch
                            value={this.props.item.state === "1" ? true : false}
                            style={styles.toggleLight}
                        />
                    </View>
                    <View style={styles.bodyLightItem}>
                        <MaterialCommunityIcons style={this.props.item.state == "1"?styles.lightOn:styles.lightOff} name={this.props.item.state == "1"?'lightbulb-on':'lightbulb-off'} size={50} color={"#000000"} />
                    </View>
                </View>
            </View>
        )    
    }
}

function Mode({route}) {

    const [itemChoose, setItemChoose] = React.useState("1");

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
                        }}
                        items={convertToDisplay(RoomsData)}
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
                            data ={filter(LightData,itemChoose)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item, index})=>{
                                return(                                    
                                    <LightItem item={item} index={index}>
                                    </LightItem>
                                );
                            }}>
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