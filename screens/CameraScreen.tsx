import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigations/Routes';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Camera'>;
};
const CameraScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const device = useCameraDevice('back');

  if (device == null) return <Text>NO Camera Found</Text>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraScreen;
