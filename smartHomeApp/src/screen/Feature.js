import React from 'react';
import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function FeaturesScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <View style={styles.containerFeature}>
                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.ViewBtnLeft} onPress={()=> navigation.navigate("Details", {name: "Door", id: "0"})}>
                        <FontAwesome5Pro name={'door-open'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ViewBtnRight} onPress={()=> navigation.navigate("Details", {name: "Window", id: "0"})}>
                        <MaterialCommunityIcons name="window-closed-variant" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.ViewBtnLeft} onPress={()=> navigation.navigate("Details", {name: "Temparature", id: "0"})}>
                        <FontAwesome5Pro name={'temperature-low'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ViewBtnRight} onPress={()=> navigation.navigate("Details", {name: "Light", id: "0"})}>
                        <MaterialCommunityIcons name="lightbulb-on" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.ViewBtnLeft} onPress={()=> navigation.navigate("Details", {name: "Gas", id: "0"})}>
                        <MaterialCommunityIcons name="gas-cylinder" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ViewBtnRight} onPress={()=> navigation.navigate("Details", {name: "Water", id: "0"})}>
                        <MaterialCommunityIcons name="water-percent" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const FeaturesStack = createStackNavigator();

function FeaturesStackScreen() {
    return (
        <FeaturesStack.Navigator>
            <FeaturesStack.Screen name="Features" component={FeaturesScreen}/>
            <FeaturesStack.Screen name="Details" component={DetailsScreen} options={({route}) => ({title: route.params.name})}/>
        </FeaturesStack.Navigator>
    )
}

export default FeaturesStackScreen;
    