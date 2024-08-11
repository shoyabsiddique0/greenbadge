// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Modal,
//     Image,
//     FlatList,
// } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../navigations/Routes';

// type AddActivityScreenProps = {
//     navigation: StackNavigationProp<RootStackParamList, 'AddActivity'>;
// };

// const categories = ['Transportation', 'Home Energy', 'Food', 'Waste', 'Water Usage'];

// const activities: { [key: string]: string[] } = {
//     'Transportation': [
//         'Public transport (bus)',
//         'Public transport (train)',
//         'Private car (petrol)',
//         'Private car (diesel)',
//         'Electric car',
//         'Motorcycle',
//         'Bicycle',
//         'Walking',
//     ],
//     'Home Energy': [
//         'Electricity consumption',
//         'Natural gas',
//         'Heating oil',
//     ],
//     'Food': [
//         'Beef',
//         'Lamb',
//         'Pork',
//         'Chicken',
//         'Fish',
//         'Eggs',
//         'Rice',
//         'Potatoes',
//         'Vegetables (average)',
//         'Fruits (average)',
//     ],
//     'Waste': [
//         'Landfill waste',
//         'Recycled waste',
//         'Composted waste',
//     ],
//     'Water Usage': [
//         'Water consumption',
//     ],
// };

// const AddActivityScreen: React.FC<AddActivityScreenProps> = ({ navigation }) => {
//     const [selectedCategory, setSelectedCategory] = useState<string>('');
//     const [selectedActivity, setSelectedActivity] = useState<string>('');
//     const [measurement, setMeasurement] = useState<string>('');
//     const [isCategoryModalVisible, setCategoryModalVisible] = useState<boolean>(false);
//     const [isActivityModalVisible, setActivityModalVisible] = useState<boolean>(false);
//     const [showTotal, setShowTotal] = useState<boolean>(false);

//     const handleSelectCategory = (category: string) => {
//         setSelectedCategory(category);
//         setSelectedActivity('');
//         setMeasurement(''); // Clear measurement
//         setCategoryModalVisible(false);
//     };

//     const handleSelectActivity = (activity: string) => {
//         setSelectedActivity(activity);
//         setMeasurement(''); // Clear measurement
//         setActivityModalVisible(false);
//     };

//     const calculateTotal = () => {
//         if (selectedCategory && selectedActivity && measurement) {
//             setShowTotal(true);
//         } else {
//             setShowTotal(false);
//         }
//     };

//     return (
//         <View style={styles.container}>

//             <Image
//         source={require('../assets/activity.png')}
//         style={styles.image}
//       />

//             <View style={styles.box}>
//                 <Text style={styles.heading}>Add Activity</Text>

//                 <TouchableOpacity onPress={() => setCategoryModalVisible(true)} style={styles.dropdown}>
//                     <Text style={styles.dropdownText}>{selectedCategory || 'Select a category'}</Text>
//                 </TouchableOpacity>

//                 {selectedCategory ? (
//                     <TouchableOpacity onPress={() => setActivityModalVisible(true)} style={styles.dropdown}>
//                         <Text style={styles.dropdownText}>{selectedActivity || 'Select an activity'}</Text>
//                     </TouchableOpacity>
//                 ) : null}

//                 <View style={styles.measurementContainer}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Enter measurement"
//                         value={measurement}
//                         onChangeText={setMeasurement}
//                         keyboardType="numeric"
//                         onBlur={calculateTotal}
//                     />
//                     <Text style={styles.unitLabel}>units</Text>
//                 </View>
//             </View>

//             {showTotal && (
//                 <View style={styles.totalBox}>
//                     <Text style={styles.totalText}>Carbon Footprint : {5}</Text>
//                 </View>
//             )}

//             <Modal visible={isCategoryModalVisible} transparent={true} animationType="slide">
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <FlatList
//                             data={categories}
//                             keyExtractor={(item) => item}
//                             renderItem={({ item }) => (
//                                 <TouchableOpacity onPress={() => handleSelectCategory(item)}>
//                                     <Text style={styles.modalItem}>{item}</Text>
//                                 </TouchableOpacity>
//                             )}
//                         />
//                     </View>
//                 </View>
//             </Modal>

//             <Modal visible={isActivityModalVisible} transparent={true} animationType="slide">
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <FlatList
//                             data={activities[selectedCategory] || []}
//                             keyExtractor={(item) => item}
//                             renderItem={({ item }) => (
//                                 <TouchableOpacity onPress={() => handleSelectActivity(item)}>
//                                     <Text style={styles.modalItem}>{item}</Text>
//                                 </TouchableOpacity>
//                             )}
//                         />
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#262626',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#262626',
//         padding: 20,
//     },
//     box: {
//         width: '90%',
//         backgroundColor: '#262626',
//         borderRadius: 10,
//         padding: 20,
//         alignItems: 'center',
//         borderColor: '#538316',
//         borderWidth: 1,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#FFF',
//         marginBottom: 20,
//         fontFamily: 'NTR',
//     },
//     dropdown: {
//         width: '100%',
//         height: 40,
//         backgroundColor: '#FFF',
//         borderRadius: 5,
//         marginBottom: 15,
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 1,
//     },
//     image: {
//         width: 300,
//         height: 300,
//         // marginBottom: 20,
//         zIndex:1
//       },
//     dropdownText: {
//         fontFamily: 'NTR',
//         fontSize: 16,
//         color: 'black',
//     },
//     measurementContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '100%',
//         marginBottom: 15,
//     },
//     input: {
//         flex: 1,
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginRight: 10,
//         fontFamily: 'NTR',
//         color: 'black',
//         backgroundColor: '#FFF',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 1,
//     },
//     unitLabel: {
//         fontSize: 16,
//         fontFamily: 'NTR',
//         color: '#FFF',
//     },
//     addButton: {
//         backgroundColor: '#538316',
//         padding: 10,
//         borderRadius: 5,
//         width: '100%',
//         alignItems: 'center',
//         marginTop: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 1,
//     },
//     buttonText: {
//         color: '#FFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         fontFamily: 'NTR',
//     },
//     totalBox: {
//         width: '90%',
//         backgroundColor: '#262626',
//         borderRadius: 10,
//         padding: 20,
//         alignItems: 'center',
//         borderColor: '#538316',
//         borderWidth: 1,
//         marginTop: 20,
//     },
//     totalText: {
//         color: '#FFF',
//         fontSize: 18,
//         fontWeight: 'bold',
//         fontFamily: 'NTR',
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     modalContent: {
//         width: '80%',
//         backgroundColor: '#262626',
//         borderRadius: 10,
//         padding: 20,
//         borderColor: '#538316',
//         borderWidth: 1,
//     },
//     modalItem: {
//         padding: 15,
//         fontSize: 16,import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {RootStackParamList} from '../navigations/Routes';
import {useEffect, useState} from 'react';
import baseUrl from '../utils/const';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import store from '../stores/ProfileStore';

type AddActivityScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddActivity'>;
};

const AddActivityScreen: React.FC<AddActivityScreenProps> = ({navigation}) => {
  const [categories, setCategories] = useState<
    {category_id: string; name: string}[]
  >([]);
  const [activities, setActivities] = useState<
    {activity_id: string; category_id: string; name: string; unit: string}[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [measurement, setMeasurement] = useState<string>('');
  const [isCategoryModalVisible, setCategoryModalVisible] =
    useState<boolean>(false);
  const [isActivityModalVisible, setActivityModalVisible] =
    useState<boolean>(false);
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [loadingActivities, setLoadingActivities] = useState<boolean>(false);
  const [activityUnit, setActivityUnit] = useState<string>('');
  //   axios.defaults.baseURL = 'https://k3wtbgfx-3000.inc1.devtunnels.ms/';
  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const response = await axios.get(`${baseUrl}/category/`, {
          headers: {'Content-Type': 'application/json'},
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);
  const submitActivity = async () => {
    try {
      const data = JSON.stringify({
        userId: store.getRawState().data.user_id,
        activityId: selectedActivity,
        carbonFootprint,
        timestamp: Date.now().toString(),
      });
      console.log(data, 'data');

      const response = await fetch(`${baseUrl}/userActivity/create`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: data,
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (response.ok) {
        console.log('Added User Activity', jsonResponse);
        // Handle successful login, e.g., navigate to another screen
        navigation.replace('Home');
      } else {
        Alert.alert('Adding User Activity Failed', jsonResponse.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert(
        'User Activity Error',
        'An error occurred during Adding User Activity. Please try again.',
      );
    }
  };

  const fetchUserData = async () => {
    try {
      const data = JSON.stringify({
        userId: store.getRawState().data.user_id,
        activityId: selectedActivity,
        carbonFootprint,
        timestamp: Date.now().toString(),
      });
      console.log(data, 'data');

      const response = await fetch(
        `${baseUrl}/user/${store.getRawState().data.user_id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        },
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (response.ok) {
        store.update(state => {
          state = jsonResponse;
        });
        console.log('Added User Activity', jsonResponse);
        // Handle successful login, e.g., navigate to another screen
        navigation.replace('Home');
      } else {
        Alert.alert('Adding User Activity Failed', jsonResponse.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert(
        'User Activity Error',
        'An error occurred during Adding User Activity. Please try again.',
      );
    }
  };

  const handleSelectCategory = async (category: {
    category_id: string;
    name: string;
  }) => {
    setSelectedCategory(category.name);
    setSelectedActivity('');
    setMeasurement('');
    setActivityUnit('');
    setCategoryModalVisible(false);
    setLoadingActivities(true);
    try {
      const response = await axios.get(
        `${baseUrl}/activity/category/${category.category_id}`,
      );
      setActivities(response.data.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setActivities([]);
    } finally {
      setLoadingActivities(false);
    }
  };

  const handleSelectActivity = (activity: {
    activity_id: string;
    category_id: string;
    name: string;
    unit: string;
  }) => {
    setSelectedActivity(activity.name);
    setActivityUnit(activity.unit);
    setMeasurement('');
    setActivityModalVisible(false);
    setCarbonFootprint(null);
  };

  const calculateTotal = () => {
    if (selectedCategory && selectedActivity && measurement) {
      // Mock calculation, replace with actual logic
      const footprint = parseFloat(measurement) * 0.5; // Example calculation
      setCarbonFootprint(footprint);
    } else {
      setCarbonFootprint(null);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/activity.png')} style={styles.image} />
      <View style={styles.box}>
        <Text style={styles.heading}>Add Activity</Text>

        <TouchableOpacity
          onPress={() => setCategoryModalVisible(true)}
          style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {selectedCategory || 'Select a category'}
          </Text>
        </TouchableOpacity>

        {selectedCategory ? (
          <TouchableOpacity
            onPress={() => setActivityModalVisible(true)}
            onPressOut={() => setActivityModalVisible(false)}
            style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {selectedActivity || 'Select an activity'}
            </Text>
          </TouchableOpacity>
        ) : null}

        <View style={styles.measurementContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter measurement"
            value={measurement}
            onChangeText={setMeasurement}
            keyboardType="numeric"
            onBlur={calculateTotal}
          />
          <Text style={styles.unitLabel}>{activityUnit || 'units'}</Text>
        </View>
      </View>

      {carbonFootprint !== null && (
        <View style={styles.totalBox}>
          <Text style={styles.totalText}>
            Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2e
          </Text>
        </View>
      )}
      {carbonFootprint !== null && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitActivity();
            fetchUserData();
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      )}

      <Modal
        visible={isCategoryModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {loadingCategories ? (
              <ActivityIndicator size="large" color="#538316" />
            ) : (
              <FlatList
                data={categories}
                keyExtractor={item => item.category_id}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => handleSelectCategory(item)}>
                    <Text style={styles.modalItem}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </Modal>

      <Modal
        visible={isActivityModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {loadingActivities ? (
              <ActivityIndicator size="large" color="#538316" />
            ) : (
              <FlatList
                data={activities}
                keyExtractor={item => item.activity_id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      handleSelectActivity(item);
                    }}>
                    <Text style={styles.modalItem}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#262626',
  },
  button: {
    backgroundColor: '#538316',
    padding: 10,
    marginTop: 20,
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    padding: 20,
  },
  box: {
    width: '90%',
    backgroundColor: '#262626',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderColor: '#538316',
    borderWidth: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    fontFamily: 'NTR',
  },
  dropdown: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 300,
    height: 300,
    // marginBottom: 20,
    zIndex: 1,
  },
  dropdownText: {
    fontFamily: 'NTR',
    fontSize: 16,
    color: 'black',
  },
  measurementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontFamily: 'NTR',
    color: 'black',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  unitLabel: {
    fontSize: 16,
    fontFamily: 'NTR',
    color: '#FFF',
  },
  addButton: {
    backgroundColor: '#538316',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  totalBox: {
    width: '90%',
    backgroundColor: '#262626',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderColor: '#538316',
    borderWidth: 1,
    marginTop: 20,
  },
  totalText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'NTR',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#262626',
    borderRadius: 10,
    padding: 20,
    borderColor: '#538316',
    borderWidth: 1,
  },
  modalItem: {
    padding: 15,
    fontSize: 16,
    color: '#FFF',
  },
});

export default AddActivityScreen;

//         fontFamily: 'NTR',
//         color: '#FFF',
//         borderBottomWidth: 1,
//         borderBottomColor: '#538316',
//     },
// });

// export default AddActivityScreen;
