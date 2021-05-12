import React, {Component} from 'react';
import { View, Text, Button, FlatList, Image, Touchable, TouchableOpacity } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import RoomsData from '../data/RomsData';
import { AuthContext } from '../api/context';
import RoomDetailsStackScreen from './RoomDetail'
class FlatListItem extends Component {
    render(){
        return(
            <View style={styles.romScreenItem}>
                <TouchableOpacity style={styles.roomSceenBtn} onPress= {() => navigation.navigate('RoomDetailsStackScreen')}>
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
                    <FlatListItem item={item} index={index}>

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
        <RoomsStack.Navigator>
            <RoomsStack.Screen name="Rooms" component={RoomsScreen}/>
            <RoomsStack.Screen name="Details" component={DetailsScreen}/>
        </RoomsStack.Navigator>
    )
}

export default RoomsStackScreen;
    