import React, {Component} from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feature from './Feature';
import RoomDetail from './RoomDetail'

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

function HomeScreen({route, navigation}) {
    return (
      <View style={styles.containerHome}>
          <TouchableOpacity style={styles.welcomeCard}>
              <Text style={{marginTop: 10}}>APRIL 15, 2021</Text>
              <Text style={styles.welcomeWord}>WELCOME HOME, KERIS!</Text>
              <Text>What are you looking for?</Text>
          </TouchableOpacity>

          <View style={styles.lineTitle}>
            <Text>Feature</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Feature")}>
              <Text style={styles.link}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
          horizontal={true}
          style={styles.scrollViewHorizontalHome}
          >
            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Door"})}>
              <FontAwesome5Pro name={'door-open'} size={30} />
              <Text style={styles.roomBtnText}>Door</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Window"})}>
              <MaterialCommunityIcons name="window-closed-variant" size={30} />
              <Text style={styles.roomBtnText}>Window</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Temperature"})}>
              <FontAwesome5Pro name={'temperature-low'} size={30} />
              <Text style={styles.roomBtnText}>Temperature</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Light"})}>
                <MaterialCommunityIcons name="lightbulb-on" size={30} />
                <Text style={styles.roomBtnText}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Gas"})}>
                <MaterialCommunityIcons name="gas-cylinder" size={30} />
                <Text style={styles.roomBtnText}>Gas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("ElementDetail", {screen:"Water"})}>
                <MaterialCommunityIcons name="water-percent" size={30} />
                <Text style={styles.roomBtnText}>Water</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.lineTitle}>
            <Text>Rooms</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Rooms")}>
              <Text style={styles.link}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
          >
            <FlatList data={RoomsData}
            renderItem={({item, index})=>{
                // console.log(`Item = ${item}, index = ${index}`);
                return(
                    
                    <FlatListItem item={item} index={index} navigation={navigation}>
                    </FlatListItem>
                );
            }}>

            </FlatList>
          </ScrollView>
      </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Feature" component={Feature} options={{
          headerShown: false,
        }}/>
      <HomeStack.Screen name="RoomsDetail" component={RoomDetail}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;