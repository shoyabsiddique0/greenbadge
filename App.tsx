/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigations/Stack';
import {Camera} from 'react-native-vision-camera';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const cameraPermission = Camera.getCameraPermissionStatus();
  const microphonePermission = Camera.getMicrophonePermissionStatus();
  const showPermissionsPage =
    cameraPermission !== 'granted' || microphonePermission === 'not-determined';
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MyStack showPermissionsPage={showPermissionsPage} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
