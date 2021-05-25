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

import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import TabNavigator from './src/screen/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './src/api/context';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp'



function App ({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try{
        userToken = await SecureStore.getItemAsync("userToken");
      }
      catch(e){
        // Restoring token fail
      }

      // Need to validate token in production apps
      

      dispatch({type: "RESTORE_TOKEN", token: userToken});
    };
    bootstrapAsync();
  }, []);
  
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {

        //Process with 'data' to signin
        console.log(data);

        if(data.username == "" && data.password == ""){
          dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
        }
      },
      signOut: () => dispatch({type: "SIGN_OUT"}),
      signUp: async data => {

        // Process with 'data' to signup
        console.log(data);
        dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
      },
    }),
    []
  );

  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken == null ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
          </Stack.Navigator>
        </NavigationContainer>
      ): (
        <TabNavigator />
      )} 
    </AuthContext.Provider>
  )
}


export default App;

// import React, { Component } from 'react';
// import init from 'react_native_mqtt';
// import { AsyncStorage,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   Alert
//  } from 'react-native';

// init({
//   size: 10000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
//   sync: {},
// });


// export default class App extends Component {

//   constructor(){
//     super();
//     this.onMessageArrived = this.onMessageArrived.bind(this)
//     this.onConnectionLost = this.onConnectionLost.bind(this)


//     const client = new Paho.MQTT.Client("io.adafruit.com", 80, 'someClientID',);
//     client.onMessageArrived = this.onMessageArrived;
//     client.onConnectionLost = this.onConnectionLost;
//     client.connect({ 
//       onSuccess: this.onConnect,
//       useSSL: false ,
//       userName: 'nhkhang',
//       password: 'aio_vLqy34YMjGWvNPG7hOPveYm4OkHO',
//       onFailure: (e) => {console.log("Here is the error: " , e); }

//     });

//     this.state = {
//       message: [''],
//       topic: '',
//       client,
//       messageToSend:'',
//       isConnected: false,
//     };

//   }


//   onMessageArrived(entry) {
//     console.log("onMessageArrived: "+ entry.payloadString);
//     this.setState({message: [...this.state.message, entry.payloadString]});
//   }


//   onConnect = () => {
//     this.setState({isConnected: true, error: ''})
//     console.log("Connected!!!");
//   };

//   subscribeTopic(){
//     const { client } = this.state;
//     console.log("Subscribe to topic: " + this.state.topic);
//     client.subscribe(this.state.topic);
//   }

//   sendMessage(){
//     let message = new Paho.MQTT.Message(this.state.messageToSend);
//     message.destinationName = this.state.topic;

//     if(this.state.isConnected){
//       this.state.client.send(message);    
//       console.log("Message sent: " + message.payloadString);
//     }
//     else{
//       this.connect(this.state.client)
//       .then(() => {
//         this.state.client.send(message);
//         this.setState({error: '', isConnected: true});
//       })
//       .catch((error)=> {
//         console.log(error);
//         this.setState({error: error});
//       });
//     }
//   }

//   onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//       console.log("onConnectionLost:" + responseObject.errorMessage);
//       this.setState({error: 'Lost Connection', isConnected: false});
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native MQTT!
//         </Text>
//         <Text style={{color: 'red'}}>
//           {this.state.error}
//         </Text>
//         { this.state.isConnected ?
//             <Text style={{color: 'green'}}>
//               State: Connected
//             </Text> : null
//         }
        
//         <View>
//           <Text>Subscribe to topic: </Text>
//           <TextInput
//             value={this.state.topic} 
//             onChangeText={(value => this.setState({topic: value}))} 
//             placeholder="Topic..."
//             style={styles.input} />
//           <Button onPress={this.subscribeTopic.bind(this) } title="Subscribe" />

//           <Text style={styles.instructions}>
//             Message received: {this.state.message.join('')}
//           </Text>
//         </View>

//         <View>
//           <Text>Publish to topic: </Text>
//           <TextInput
//             value={this.state.topic} 
//             onChangeText={(value => this.setState({topic: value}))} 
//             placeholder="Topic..."
//             style={styles.input} />
//           <Text>Message send: </Text>
//           <TextInput
//             value={this.state.messageToSend} 
//             onChangeText={(value => this.setState({messageToSend: value}))} 
//             placeholder="Message..."
//             style={styles.input} />
//           <Button onPress={this.sendMessage.bind(this) } title="Send Message" />
//         </View>
//       </View>
//     );
//   }


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   button: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonLabel: {
//     color: 'blue',
//   },
//   input:{
//     width: 300
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import React from 'react';
// import { StyleSheet, Text, View} from 'react-native';
// import MQTT from 'sp-react-native-mqtt';
// export default function App() {

//   /* create mqtt client */
//   MQTT.createClient({
//     uri: 'mqtts://io.adafruit.com:1883',
//     clientId: 'your_client_id',
//     user: "nhkhang",
//     pass: "aio_vLqy34YMjGWvNPG7hOPveYm4OkHO",
//     auth: true,
//   }).then(function(client) {
//     console.log("hi");
//     client.on('closed', function() {
//       console.log('mqtt.event.closed');
//     });

//     client.on('error', function(msg) {
//       console.log('mqtt.event.error', msg);
//     });

//     client.on('message', function(msg) {
//       console.log('mqtt.event.message', msg);
//     });

//     client.on('connect', function() {
//       console.log('connected');
//       client.subscribe('nhkhang/feeds/bk-iot-led', 0);
//       client.publish('nhkhang/feeds/bk-iot-led', "test", 0, false);
//     });

//     client.connect();
//   }).catch(function(err){
//     console.log(err);
//   });

//   return (
//     <View>
//       <Text>MQTT</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })