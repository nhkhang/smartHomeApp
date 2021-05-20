// import * as React from 'react';
// import * as SecureStore from 'expo-secure-store';
// import TabNavigator from './src/screen/TabNavigator';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AuthContext } from './src/api/context';
// import SignIn from './src/screen/SignIn';
// import SignUp from './src/screen/SignUp';
// import Test from './src/screen/Test';


// function App ({navigation}) {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case "SIGN_IN":
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case "SIGN_OUT":
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
        
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     const bootstrapAsync = async () => {
//       let userToken;

//       try{
//         userToken = await SecureStore.getItemAsync("userToken");
//       }
//       catch(e){
//         // Restoring token fail
//       }

//       // Need to validate token in production apps
      

//       dispatch({type: "RESTORE_TOKEN", token: userToken});
//     };
//     bootstrapAsync();
//   }, []);
  
//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {

//         //Process with 'data' to signin
//         console.log(data);

//         if(data.username == "" && data.password == ""){
//           dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
//         }
//       },
//       signOut: () => dispatch({type: "SIGN_OUT"}),
//       signUp: async data => {

//         // Process with 'data' to signup
//         console.log(data);
//         dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
//       },
//     }),
//     []
//   );

//   const Stack = createStackNavigator();

//   return (
//     <AuthContext.Provider value={authContext}>
//       {state.userToken == null ? (
//         <NavigationContainer>
//           <Stack.Navigator
//             initialRouteName="Test"
//             screenOptions={{
//               headerShown: false
//             }}
//           >
//             <Stack.Screen name="SignIn" component={SignIn}/>
//             <Stack.Screen name="SignUp" component={SignUp}/>
//             <Stack.Screen name="Test" component={Test}/>
//           </Stack.Navigator>
//         </NavigationContainer>
//       ): (
//         <TabNavigator />
//       )} 
//     </AuthContext.Provider>
//   )
// }


// export default App;

import React, {useEffect, Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MQTTConnection from './src/mqtt/MQTTConnection'
import {Buffer} from 'buffer';  
global.Buffer = Buffer;

export default class App extends Component{

  constructor(){
    super();

    this.mqttConnect = new MQTTConnection();
    this.mqttConnect.onMQTTConnect = this.onMQTTConnect;
    this.mqttConnect.onMQTTLost = this.onMQTTLost;
    this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived;
    this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered;

    this.mqttConnect.connect("mqtts://io.adafruit.com", 8883, {
      useSSL: false ,
      userName: 'nhkhang',
      password: 'aio_TvTg56hn37NwF1RgvCRjzCqJQN86',
    });
    
    onMQTTConnect = () => {
      console.log("App onMQTTConnect");
      this.mqttConnect.subscribeChannel("nhkhang/feeds/bk-iot-led");
    }

    onMQTTLost = () => {
      console.log("App onMQTTLost");
    }

    onMQTTMessageArrived = (message) => {
      console.log("App onMQTTMessageArrived: ", message);
      console.log("App onMQTTMessageArrived payloadString: ", message.payloadString);
    } 

    return () => {
      this.mqttConnect.close();
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>react_native_mqtt</Text>
        <Button 
          title="Press me"
          onPress={() => this.mqttConnect.send("nhkhang/feeds/bk-iot-led", "message need send")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})