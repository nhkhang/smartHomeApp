import React from 'react';
import { Text, View, TextInput, Button , TouchableOpacity, Image} from 'react-native';

import { AuthContext } from '../api/context';
import styles from '../style/screen';


function SignIn({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const {signIn} = React.useContext(AuthContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Smart Home App</Text>
        <Image
            style={styles.logo}
            source={{
              uri: '../img/logo.jpg',
            }}
          />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        
        <Text style={styles.forgetBtn}>Forget your password ?</Text>

        <TouchableOpacity style ={styles.signinBtn} onPress= {() => signIn({username, password})}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.singupBtn} onPress= {() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default SignIn;