import React from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'

function RoomsScreen({navigation}) {
    return (
        <View style={styles.content}>
            <Text>Rooms</Text>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate('Details', {
                    screen: 'Rooms',
                })}
            />
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
    