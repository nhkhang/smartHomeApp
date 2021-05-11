import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen'
import HomeScreen from './screens/homeScreen'
import AuthLoadingScreen from './screens/authLoadingScreen'

const BeforSignin = createAppContainer({
    Login:{
        screen: LoginScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Login"
})

const AfterSignin = createAppContainer({
    Home:{
        screen: HomeScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Home"
})

const AppNavigator = createStackNavigator({
    Auth: BeforSignin,
    App: AfterSignin,
    AuthLoadingScreen: AuthLoadingScreen
}, {
    headerMode: "none",
    initialRouteName: "Auth"
})

export default createAppContainer(AppNavigator);