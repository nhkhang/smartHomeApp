import React from 'react';
// import { View, Text, Button } from "react-native";
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackScreen from './Home'
import NotificationsStackScreen from './Notification'
import RoomsStackScreen from './Rooms'
import SettingsStackScreen from './Setting'
import FeaturesStackScreen from './Feature'
import RoomDetailsStackScreen from './RoomDetail'

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route})=>({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if(route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }
            else if(route.name === 'Rooms') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}

        tabBarOptions ={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Rooms" component={RoomsStackScreen}/>
        <Tab.Screen name="Notifications" component={NotificationsStackScreen}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator;