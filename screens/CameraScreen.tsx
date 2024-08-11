// import {
//   Camera,
//   useCameraDevices,
//   useCameraDevice,
//   useCameraPermission,
//   useCodeScanner,
//   Code,
// } from 'react-native-vision-camera';

// import {StackNavigationProp} from '@react-navigation/stack';
// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Alert,
//   Touchable,
//   TouchableOpacity,
// } from 'react-native';
// import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
// import {RootStackParamList} from '../navigations/Routes';
// import ProductData from '../utils/product';
// import ProductDetails from './ProductDetails';
// import baseUrl from '../utils/const';
// import store from '../stores/ProfileStore';

// type HomeScreenProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'Camera'>;
// };
// const CameraScreen: React.FC<HomeScreenProps> = ({navigation}) => {
//   const [hasCameraPermission, setHasCameraPermission] =
//     useState<boolean>(false);
//   const [product, setProduct] = useState<ProductData>();
//   const [loading, setLoading] = useState<boolean>(false);
//   const [latestScannedData, setLatestScannedData] = useState<
//     String | undefined
//   >('');
//   const device = useCameraDevice('back');
//   const checkCameraPermission = async () => {
//     const result = await check(PERMISSIONS.ANDROID.CAMERA);
//     if (result === RESULTS.GRANTED) {
//       setHasCameraPermission(true);
//     } else {
//       const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
//       setHasCameraPermission(requestResult === RESULTS.GRANTED);
//     }
//   };

//   React.useEffect(() => {
//     checkCameraPermission();
//   }, []);
//   const GetDetails = async () => {
//     setLoading(true);
//     const response = await fetch(
//       `${baseUrl}/search/${latestScannedData}/${
//         store.getRawState().data.user_id
//       }`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     const data = await response.json();
//     if (response.ok) {
//       setProduct(data);
//       navigation.navigate('ProductDetails', {data: product!});
//     } else {
//       Alert.alert('No product found');
//     }
//   };
//   const codeScanner = useCodeScanner({
//     codeTypes: ['qr', 'ean-13'],
//     onCodeScanned: (code: Code[]) => {
//       setLatestScannedData(code[0].value);
//       console.log('Code scanned', code[0].value);
//     },
//   });

//   if (device == null) {
//     Alert.alert('No camera available');
//     return (
//       <>
//         <Text>No Camera Found</Text>
//       </>
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         codeScanner={codeScanner}
//         device={device}
//         isActive={true}
//       />
//       {latestScannedData && (
//         <View style={styles.resultContainer}>
//           <TouchableOpacity onPress={() => GetDetails()}>
//             <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
//             <Text style={styles.resultText}>{latestScannedData}</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   resultContainer: {
//     position: 'absolute',
//     bottom: 40, // Adjust the position to provide space between the camera view and the result container
//     left: 20,
//     right: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     padding: 10,
//     borderRadius: 5,
//   },
//   resultTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: 'white',
//   },
//   resultText: {
//     fontSize: 14,
//     color: 'white',
//   },
// });
// export default CameraScreen;

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
  Code,
} from 'react-native-vision-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {RootStackParamList} from '../navigations/Routes';
import ProductData from '../utils/product';
import baseUrl from '../utils/const';
import store from '../stores/ProfileStore';
import productStore from '../stores/ProductStore';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Camera'>;
};

const CameraScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [product, setProduct] = useState<ProductData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [latestScannedData, setLatestScannedData] = useState<
    string | undefined
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

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const GetDetails = async () => {
    setLoading(true);
    try {
      console.log(
        `${baseUrl}/barcode/search/${latestScannedData}/${
          store.getRawState().data.user_id
        }`,
      );

      const response = await fetch(
        `${baseUrl}/barcode/search/${latestScannedData}/${
          store.getRawState().data.user_id
        }`,
        {
          method: 'GET',
        },
      );
      const data = await response.json();
      console.log(data);

      setLoading(false);

      if (data) {
        setProduct(data.data);
        productStore.update(
          state => {
            state = data.data;
            console.log('activity updated', state);
          },
          err => {
            console.error('Error updating activity:', err);
          },
        );
        console.log(productStore.getRawState());

        setTimeout(() => {
          navigation.navigate('ProductDetails');
        }, 100); // Navigate with fetched data
      } else {
        Alert.alert('No product found');
        console.log(response.status);
      }
    } catch (error) {
      setLoading(false);

      Alert.alert('Error fetching product details');
      console.error('Error fetching product details:', error);
      22;
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (code: Code[]) => {
      setLatestScannedData(code[0].value);
      console.log('Code scanned', code[0].value);
    },
  });

  if (device == null) {
    Alert.alert('No camera available');
    return <Text>No Camera Found</Text>;
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
        <View style={styles.resultContainer}>
          <TouchableOpacity onPress={() => GetDetails()}>
            <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
            <Text style={styles.resultText}>{latestScannedData}</Text>
          </TouchableOpacity>
        </View>
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
    bottom: 40,
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
