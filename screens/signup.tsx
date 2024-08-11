import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RootStackParamList} from '../navigations/Routes';
import baseUrl from '../utils/const';
import {setItem} from 'react-native-shared-preferences';
import store from '../stores/ProfileStore';

type SignupScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('M');

  const handleSignUp = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          age: parseInt(age),
          password,
          gender,
        }),
      });

      const jsonResponse = await response.json();

      if (response.ok) {
        setItem('profile', JSON.stringify(jsonResponse));
        store.update(state => {
          state = jsonResponse;
        });
        console.log('Signup successful:', jsonResponse);
        navigation.replace('DecisionScreen');
      } else {
        Alert.alert('Signup Failed', jsonResponse.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      Alert.alert(
        'Signup Error',
        'An error occurred during signup. Please try again.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: '../assets/Save the Earth-bro (2).png'}}
        style={styles.image}
      />
      <Text style={styles.title}>Join Us!</Text>
      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        onChangeText={text => setAge(text)}
        value={age}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Text style={styles.label}>Gender:</Text>
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue: string, itemIndex: number) =>
          setGender(itemValue)
        }>
        <Picker.Item label="Male" value="M" />
        <Picker.Item label="Female" value="F" />
        <Picker.Item label="Others" value="O" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    backgroundColor: '#262626',
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
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#538313',
    position: 'static',
    bottom: 10,
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
