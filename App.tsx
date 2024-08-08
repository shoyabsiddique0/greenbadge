import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigations/Stack';
import {Camera} from 'react-native-vision-camera';
import store from './utils/global';
import {getItem} from 'react-native-shared-preferences';

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPermissionsPage, setShowPermissionsPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkPermissions = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const microphonePermission = await Camera.getMicrophonePermissionStatus();
      setShowPermissionsPage(
        cameraPermission !== 'granted' ||
          microphonePermission === 'not-determined',
      );
    };

    const fetchProfile = async () => {
      getItem('profile', profileData => {
        console.log('Profile data: ', profileData);
        // if (profileData) {
        const profileObj = JSON.parse(profileData!);
        if (profileObj) {
          store.update(state => {
            state.data = profileObj.data;
            setIsLoggedIn(true);
            console.log(state, 'Profile updated');
          });
        }

        // } else {
        //   setIsLoggedIn(false);
        // }
        setIsLoading(false);
      });
    };

    checkPermissions();
    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#538313" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MyStack
          showPermissionsPage={showPermissionsPage}
          isLoggedIn={isLoggedIn}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
