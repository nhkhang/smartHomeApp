import React from 'react';
// import { View, Text, Button } from "react-native";
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screen/Home'
import NotificationsScreen from './src/screen/Notification'
import RoomsScreen from './src/screen/Rooms'
import SettingsScreen from './src/screen/Setting'

const Tab = createBottomTabNavigator();

function App() {
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
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Rooms" component={RoomsScreen}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;