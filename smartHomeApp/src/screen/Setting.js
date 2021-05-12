import React from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './Details'
import styles from '../style/screen'
import { AuthContext } from '../api/context';

function SettingsScreen({navigation}) {

    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.content}>
            <Text>Settings</Text>
            <Button title="Sign Out" onPress={() => signOut()}/>
        </View>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
            <SettingsStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen;
    