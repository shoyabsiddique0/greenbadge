import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigations/Routes';

type SignupScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
  };
  const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
  
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: '.\assets\Save the Earth-bro (2).png' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Join Us!</Text>
      <Text style={styles.label}>Your Name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your full name" 
        onChangeText={(text)=>setName(text)} 
        value={name}
      />
      <Text style={styles.label}>Username:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter you email address" 
        onChangeText={(text)=>setUsername(text)} 
        value={username}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={(text)=>setPassword(text)} 
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{handleSignUp;navigation.navigate('Login')}}>
        <Text style={styles.buttonText}>Create an account</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F2F',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
  },
  button: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SignupScreen;
