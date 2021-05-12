import React from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import RoomsDetail from './RoomsDetail'
import styles from '../style/screen'

function RoomsScreen({navigation}) {
    return (
        <View style={styles.content}>
            <Text>Rooms</Text>
            <Button
                title="Living Rooms"
                onPress={()=>navigation.navigate('RoomsDetail', {
                    rooms: 'Living Rooms',
                })}
            />
            <Button
                title="Bed Rooms"
                onPress={()=>navigation.navigate('RoomsDetail', {
                    rooms: 'Bed Rooms',
                })}
            />
            <Button
                title="kitchen"
                onPress={()=>navigation.navigate('RoomsDetail', {
                    rooms: 'Kitchen',
                })}
            />
        </View>
    );
}

const RoomsStack = createStackNavigator();

function RoomsStackScreen() {
    return (
        <RoomsStack.Navigator>
            <RoomsStack.Screen
                name="Rooms"
                component={RoomsScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <RoomsStack.Screen
                name="RoomsDetail"
                component={RoomsDetail}
                options={({route}) => ({title: route.params.rooms})}
            />
        </RoomsStack.Navigator>
    )
}

export default RoomsStackScreen;
    