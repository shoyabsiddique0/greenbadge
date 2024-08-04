import {
  Camera,
  useCameraDevices,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  Code,
} from 'react-native-vision-camera';

import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {RootStackParamList} from '../navigations/Routes';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Camera'>;
};
const CameraScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [latestScannedData, setLatestScannedData] = useState<
    String | undefined
  >('');
  const device = useCameraDevice('back');
  const checkCameraPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.CAMERA);
    if (result === RESULTS.GRANTED) {
      setHasCameraPermission(true);
    } else {
      const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
      setHasCameraPermission(requestResult === RESULTS.GRANTED);
    }
  };

  React.useEffect(() => {
    checkCameraPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (code: Code[]) => {
      setLatestScannedData(code[0].value);
      console.log('Code scanned', code[0].value);
    },
  });

  if (device == null) {
    Alert.alert('No camera available');
    return (
      <>
        <Text>No Camera Found</Text>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
        device={device}
        isActive={true}
      />
      {latestScannedData && (
        <TouchableOpacity onPress={() => navigation.push('Alternative')}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
            <Text style={styles.resultText}>{latestScannedData}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    position: 'absolute',
    bottom: 40, // Adjust the position to provide space between the camera view and the result container
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  resultText: {
    fontSize: 14,
    color: 'white',
  },
});
export default CameraScreen;
