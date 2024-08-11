import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigations/Routes';
import baseUrl from '../utils/const';
import {setItem} from 'react-native-shared-preferences';
import store from '../stores/HomeStore';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      var data = JSON.stringify({email: username.toLowerCase(), password});
      console.log(data, 'data');

      const response = await fetch(baseUrl + '/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
      console.log('Executed successfully', response);

      const jsonResponse = await response.json();

      if (response.ok) {
        console.log('Login successful:', jsonResponse);
        setItem('profile', JSON.stringify(jsonResponse));
        store.update(state => {
          state = jsonResponse;
        });
        console.log(store.getRawState());
        // Handle successful login, e.g., navigate to another screen
        navigation.replace('Home');
      } else {
        Alert.alert('Login Failed', jsonResponse.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert(
        'Login Error',
        'An error occurred during login. Please try again.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Save-the-Earth-pana.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        onChangeText={setUsername}
        value={username}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="************"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          marginLeft: 20,
        }}>
        <TouchableOpacity
          onPress={() => console.warn('Forgot Password pressed')}>
          <Text style={styles.forgotPassword}>Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgotPassword}>Sign Up </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    // marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#FFF',
    marginBottom: 5,
    marginLeft: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
    color: 'black',
  },
  forgotPassword: {
    color: '#007BFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#538316',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    position: 'static',
    // flex: Image;
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default LoginScreen;
