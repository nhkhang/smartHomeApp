import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import * as SecureStore from 'expo-secure-store';

import TabNavigator from './src/screen/TabNavigator';



const AuthContext = React.createContext();


function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign in" onPress= {() => signIn({username, password})}/>
    </View>
  )
}



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

      }

      dispatch({type: "RESTORE_TOKEN", token: userToken});
    };
    bootstrapAsync();
  }, []);
  
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        if(data.username == "huu" && data.password == "12345"){
          dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
        }
      },
      signOut: () => dispatch({type: "SIGN_OUT"}),
      signUp: async data => {
        dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
      },
    }),
    []
  );

  // const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken == null ? (
        <SignInScreen/>
      ): (
        <TabNavigator />
      )} 
    </AuthContext.Provider>
  )
}


export default App;