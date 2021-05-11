import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import TabNavigator from './src/screen/TabNavigator';
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

        if(data.username == "huu" && data.password == "12345"){
          dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
        }
      },
      signOut: () => dispatch({type: "SIGN_OUT"}),
      signUp: async data => {

        // Process with 'data' to signup

        dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
      },
    }),
    []
  );

  // const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken == null ? (
        <SignIn style={{marginTop: 12}}/>
      ): (
        <TabNavigator />
      )} 
    </AuthContext.Provider>
  )
}


export default App;