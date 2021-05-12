import React, {Component} from 'react';
import { View, Text, Button, FlatList, Image, Touchable, TouchableOpacity } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import RoomDetail from './RoomDetail';
import Detail from './Details';

class FlatListItem extends Component {
    render(){
        return(
            <View style={styles.romScreenItem}>
                <TouchableOpacity style={styles.roomSceenBtn} onPress= {() => this.props.navigation.navigate('RoomDetail', {rooms: this.props.item.name})}>
                    <Image
                        source = {{uri: this.props.item.url}}
                        style={styles.roomSceenBtnImage}>
                    </Image>

                    <View style={styles.roomSceenBtnText}>
                        <Text style={styles.roomSceenBtnName}>{this.props.item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>          
        )
    }
};

function RoomsScreen({navigation}) {
    return (
        <View>
            <FlatList data={RoomsData}
            renderItem={({item, index})=>{
                // console.log(`Item = ${item}, index = ${index}`);
                return(
                    
                    <FlatListItem item={item} index={index} navigation={navigation}>
                    </FlatListItem>
                );
            }}>

            </FlatList>
        </View>
    );
}

const RoomsStack = createStackNavigator();

function RoomsStackScreen() {
    return (
        <RoomsStack.Navigator
        >
            <RoomsStack.Screen
                name="Rooms"
                component={RoomsScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <RoomsStack.Screen
                name="RoomDetail"
                component={RoomDetail}
                options={({route}) => ({title: route.params.rooms})}
            />
            <RoomsStack.Screen
                name="ElementDetail"
                component={Detail}
                options={({route}) => ({title: route.params.screen})}
            />
        </RoomsStack.Navigator>
    )
}

export default RoomsStackScreen;
    