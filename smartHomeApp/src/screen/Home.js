import React, {Component} from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import RoomsData from '../data/RoomsData';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feature from './Feature';
import RoomDetail from './RoomDetail';
import Door from './Door';
import Light from './Light';

class FlatListRooms extends Component {
  render() {
      return (
        <View style={styles.homeRoomScreenItem}>
          <TouchableOpacity style={styles.roomSceenBtn} onPress= {() => this.props.navigation.navigate('RoomDetail', {screen: this.props.item.name})}>
              <Image
                  source = {{uri: this.props.item.url}}
                  style={styles.homeRoomSceenBtnImage}>
              </Image>

              <View style={styles.homeroomSceenBtnText}>
                  <Text style={styles.homeroomSceenBtnName}>{this.props.item.name}</Text>
              </View>
          </TouchableOpacity>
        </View>
      ); 
  }
}


function HomeScreen({route, navigation}) {
    return (
      <View style={styles.containerHome}>

          <TouchableOpacity style={styles.welcomeCard}>
              <Text style={{marginTop: 10}}>APRIL 15, 2021</Text>
              <Text style={styles.welcomeWord}>WELCOME HOME, KERIS!</Text>
              <Text>What are you looking for?</Text>
          </TouchableOpacity>

          <View style={styles.dividingLine}></View>

          <View style = {styles.homefeature}>
            <View style={styles.lineTitle}>
              <Text>Feature</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Feature")}>
                <Text style={styles.link}>View All</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewHorizontalHomeFeature}
            >
              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("Door", {screen:""})}>
                <FontAwesome5Pro name={'door-open'} size={30} />
                <Text style={styles.roomBtnText}>Door</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("Door", {screen:""})}>
                <MaterialCommunityIcons name="window-closed-variant" size={30} />
                <Text style={styles.roomBtnText}>Window</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("DetailsRoom", {screen:"Temperature"})}>
                <FontAwesome5Pro name={'temperature-low'} size={30} />
                <Text style={styles.roomBtnText}>Temperature</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("Light", {screen:""})}>
                  <MaterialCommunityIcons name="lightbulb-on" size={30} />
                  <Text style={styles.roomBtnText}>Light</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("DetailsRoom", {screen:"Gas"})}>
                  <MaterialCommunityIcons name="gas-cylinder" size={30} />
                  <Text style={styles.roomBtnText}>Gas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roomDetailBtnHome} onPress={()=>navigation.navigate("DetailsRoom", {screen:"Water"})}>
                  <MaterialCommunityIcons name="water-percent" size={30} />
                  <Text style={styles.roomBtnText}>Water</Text>
              </TouchableOpacity>
            </ScrollView>

          </View>
        
          <View style={styles.dividingLine}></View>
          
          <View style={styles.homeRooms}>
            <View style={styles.lineTitle}>
              <Text>Rooms</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Rooms")}>
                <Text style={styles.link}>View All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView >
              <FlatList
                data={RoomsData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>{
                  return(
                      
                      <FlatListRooms item={item} index={index} navigation={navigation}>
                      </FlatListRooms>
                  );
              }}>

              </FlatList>

            </ScrollView>           
          </View>
          <View style={styles.dividingLine}></View>

          <View style={styles.quickReport}>
            <View style={styles.lineTitle}>
              <Text>Quick Report</Text>
              <TouchableOpacity>
                <Text style={styles.link}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.quickReportScrollView}
            >
              <TouchableOpacity style={styles.quickReportItem}>
                <Text style={styles.titleReportItem}>Average Temparature</Text>
                <Text style={styles.reportItemValue}>22.9°C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickReportItem}>
                <Text style={styles.titleReportItem}>Average Humidity</Text>
                <Text style={styles.reportItemValue}>43.6%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickReportItem}>
                <Text style={styles.titleReportItem}>Gas</Text>
                <Text style={styles.reportItemValue}>43.6%</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
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
      <HomeStack.Screen name="RoomDetail" component={RoomDetail} options={({route}) => ({title: route.params.screen})}/>
      <HomeStack.Screen name="Door" component={Door} options={({route}) => ({title: "Door " + route.params.screen})}/>
      <HomeStack.Screen name="Light" component={Light} options={({route}) => ({title: "Light " + route.params.screen})}/>
      <HomeStack.Screen name="DetailsRoom" component={DetailsScreen} options={({route}) => ({title: route.params.screen})}/>
      <HomeStack.Screen
          name="ElementDetail"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.screen})}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;