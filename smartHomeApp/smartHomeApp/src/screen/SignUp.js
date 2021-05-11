import React from 'react';
import { Text, View, TextInput, Button , TouchableOpacity, Image} from 'react-native';

import { AuthContext } from '../api/context';
import styles from '../style/screen';




function SignUp({navigation}) { 

    const {signIn} = React.useContext(AuthContext);

    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={{
            uri: '../img/logo.jpg',
          }}
        >
        </Image>
        <Text style={styles.title}>Smart Home App</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
          />
        </View>
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity style ={styles.signinBtn} onPress= {() => signIn({username, password})}>
          <Text style={styles.signinText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.singupBtn} onPress= {() => navigation.navigate('SignIn')}>
          <Text style={styles.signupText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default SignUp;