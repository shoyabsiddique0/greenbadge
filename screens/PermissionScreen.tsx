import React, {useCallback, useEffect, useState} from 'react';
import type {ImageRequireSource} from 'react-native';
import {Linking} from 'react-native';
import {StyleSheet, View, Text, Image} from 'react-native';
import type {CameraPermissionStatus} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../navigations/Routes';
import {StackNavigationProp} from '@react-navigation/stack';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const BANNER_IMAGE = require('./img/11.png') as ImageRequireSource;

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PermissionsPage'>;
};
const PermissionsPage: React.FC<HomeScreenProps> = ({navigation}) => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');
  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...');
    const permission = await Camera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setMicrophonePermissionStatus(permission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  useEffect(() => {
    if (
      cameraPermissionStatus === 'granted' &&
      microphonePermissionStatus === 'granted'
    )
      navigation.replace('Home');
  }, [cameraPermissionStatus, microphonePermissionStatus, navigation]);

  return (
    <View style={styles.container}>
      {/* <Image source={BANNER_IMAGE} style={styles.banner} /> */}
      <Text style={styles.welcome}>Welcome to{'\n'}Green Badge.</Text>
      <View style={styles.permissionsContainer}>
        {cameraPermissionStatus !== 'granted' && (
          <Text style={styles.permissionText}>
            Vision Camera needs{' '}
            <Text style={styles.bold}>Camera permission</Text>.{' '}
            <Text style={styles.hyperlink} onPress={requestCameraPermission}>
              Grant
            </Text>
          </Text>
        )}
        {microphonePermissionStatus !== 'granted' && (
          <Text style={styles.permissionText}>
            Vision Camera needs{' '}
            <Text style={styles.bold}>Microphone permission</Text>.{' '}
            <Text
              style={styles.hyperlink}
              onPress={requestMicrophonePermission}>
              Grant
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
    color: 'white',
  },
  banner: {
    position: 'absolute',
    opacity: 0.4,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 100,
  },
  permissionsContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
  permissionText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});
export default PermissionsPage;
