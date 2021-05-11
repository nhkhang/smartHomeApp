import React from 'react';
import { View, Text, Button, Image } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'

function HomeScreen({navigation}) {
    return (
        <View style={styles.content}>
          <Text>Home Screen</Text>

          <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details', {
                  screen: 'Home',
              })}
          />
        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;